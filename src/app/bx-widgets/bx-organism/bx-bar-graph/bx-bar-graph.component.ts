import * as d3 from 'd3';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { BxBarChartService } from 'src/app/bx-core/bx-chartDatas/bx-barChart/bx-bar-chart.service';

@Component({
  selector: 'app-bx-bar-graph',
  templateUrl: './bx-bar-graph.component.html',
  styleUrls: ['./bx-bar-graph.component.scss'],
})
export class BxBarGraphComponent implements AfterViewInit {


  @ViewChild('chart') private chartContainer!: ElementRef;

  constructor(private dataService: BxBarChartService) {}

  ngAfterViewInit(): void {
    this.createSvg();
    this.drawBars(this.chartData);
    this.fetchDataAndDrawBars();
  }

  private chartData: any[] = [];
  private svg: any;
  private margin = 60;
  private width = 800 - this.margin * 2;
  private height = 500 - this.margin * 2;

  private createSvg(): void {
    this.svg = d3
      .select(this.chartContainer.nativeElement)
      .append('svg')
      .attr('width', this.width + this.margin * 2)
      .attr('height', this.height + this.margin * 2)
      .append('g')
      .attr('transform', 'translate(' + this.margin + ',' + this.margin + ')');
  }

  private drawBars(data: any[]): void {
    // Calculate the total number of bars
    const totalBars = data.length;

    // Calculate the width of each bar including the gap
    const barWidth = (this.width - (totalBars - 1) * 75) / totalBars;

    // Create the X-axis band scale
    const x = d3
      .scaleBand()
      .range([0, this.width])
      .domain(data.map((d) => d.year))
      .paddingInner(0.7) // Set inner padding for bars
      .paddingOuter(0.3); // Set outer padding for bars

    // Draw the X-axis on the DOM
    this.svg
      .append('g')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(
        d3.axisBottom(x).tickSize(0) // Remove tick lines
      )
      .selectAll('text')
      .attr('transform', 'translate(50,20)')
      .style('text-anchor', 'end')
      .attr('dy', '0.35em')
      .attr('font-size', '18px')
      .attr('font-weight', '500');

    // Create the Y-axis band scale
    const y = d3
      .scaleLinear()
      .domain([0, 150]) // Set the domain to desired values
      .range([this.height, 0]);

    // Customize Y-axis ticks
    this.svg
      .append('g')
      .call(
        d3
          .axisLeft(y)
          .tickValues([0, 50, 100, 150]) // Set desired tick values
          .tickSize(0) // Remove tick lines
      )
      .selectAll('text')
      .attr('dy', '0.35em')
      .attr('font-size', '18px')
      .attr('font-weight', '500');

    // Remove both X-axis and Y-axis baseline
    this.svg.selectAll('.domain').remove();

    // Add horizontal lines
    this.svg
      .selectAll('.horizontal-line')
      .data([0, 50, 100, 150]) // Y-axis tick values
      .enter()
      .append('line')
      .attr('class', 'horizontal-line')
      .attr('x1', 30)
      .attr('y1', (d: any) => y(d))
      .attr('x2', this.width + 50)
      .attr('y2', (d: any) => y(d))  
      .attr('stroke', '#E5E5EF')
      .attr('stroke-width', '2px');

    // Create and fill the bars
    this.svg
      .selectAll('bars')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d: any) => (x(d.year) ?? 0) + 20) // Use default value if x(d.year) is undefined
      .attr('y', (d: any) => y(d.totalControls) ?? 0) // Use default value if y(d.controlsCovered) is undefined
      .attr('width', barWidth)
      .attr('height', (d: any) => this.height - (y(d.totalControls) ?? 0)) // Use default value if y(d.controlsCovered) is undefined
      .attr('fill', '#777777');

    //   // Add clock rectangles
    this.svg
      .selectAll('.clock')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'clock')
      .attr('x', (d: any) => (x(d.year) ?? 0) + 11)
      .attr('y', (d: any) => y(d.controlsCovered ?? 0)) // Position based on controlsCovered
      .attr('width', 70) // Width of the clock rectangle
      .attr('height', 10) // Height of the clock rectangle
      .attr('fill', '#FF537C'); // Color of the clock rectangle
  }
  private fetchDataAndDrawBars(): void {
    this.dataService.getData().subscribe(
      (data) => {
        this.chartData = data; // Update chartData with data from API
        this.drawBars(this.chartData); // Draw bars with fetched data
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
