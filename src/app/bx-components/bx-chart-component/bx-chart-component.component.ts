import { Component } from '@angular/core';

@Component({
  selector: 'app-bx-chart-component',
  templateUrl: './bx-chart-component.component.html',
  styleUrls: ['./bx-chart-component.component.scss']
})
export class BxChartComponentComponent {


   // ngAfterViewInit(): void {
  //   this.createChart();
  // }

  // private createChart(): void {
  //   // Original data
  //   const data: BarChartData[] = [
  //     { year: '2019', controlsCovered: 10, totalControls: 9 },
  //     { year: '2020', controlsCovered: 8, totalControls: 8 },
  //     { year: '2021', controlsCovered: 6, totalControls: 7 },
  //     { year: '2022', controlsCovered: 4, totalControls: 6 },
  //     { year: '2023', controlsCovered: 2, totalControls: 5 },
  //     { year: '2024', controlsCovered: 1, totalControls: 4 }
  //   ];

  //   // SVG Container Setup
  //   const margin = { top: 20, right: 20, bottom: 30, left: 50 };
  //   const width = 250 - margin.left - margin.right;
  //   const height = 400 - margin.top - margin.bottom;
  //   const svg = d3
  //     .select(this.chartContainer.nativeElement)
  //     .append('svg')
  //     .attr('width', width + margin.left + margin.right)
  //     .attr('height', height + margin.top + margin.bottom)
  //     .append('g')
  //     .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  //   // Scales
  //   const x: d3.ScaleBand<string> = d3
  //     .scaleBand()
  //     .range([0, width])
  //     .padding(0.1)
  //     .domain(data.map((d) => d.year));

  //   const controlsUndefined = data
  //     .map((d) => d.controlsCovered)
  //     .filter((value) => value !== undefined) as number[];
  //   const maxControls = d3.max(controlsUndefined) || 0;
  //   const y = d3.scaleLinear().range([height, 0]).domain([0, maxControls]);

  //   // Axes
  //   svg.append('g').attr('transform', 'translate(0,' + height + ')').call(d3.axisBottom(x));

  //   // Horizontal Lines
  //   const lines = [0, 50, 100, 150]; // Specify the values for horizontal lines
  //   lines.forEach((lineValue) => {
  //     svg.append('line')
  //       .attr('class', 'horizontal-line')
  //       .attr('x1', 0)
  //       .attr('y1', y(lineValue))
  //       .attr('x2', width)
  //       .attr('y2', y(lineValue))
  //       .attr('stroke', '#ddd') // Adjust stroke color as needed
  //       .attr('stroke-width', 1) // Adjust stroke width as needed
  //       .attr('stroke-dasharray', '4 4'); // Add dash array for dashed lines if desired
  //   });

  //   // Bars
  //   svg
  //     .selectAll('.bar')
  //     .data(data)
  //     .enter()
  //     .append('rect')
  //     .attr('class', 'bar')
  //     .attr('x', (d) => x(d.year) || 0)
  //     .attr('width', x.bandwidth())
  //     .attr('y', (d) => y(d.controlsCovered))
  //     .attr('height', (d) => height - y(d.controlsCovered))
  //     .attr('rx', 0)
  //     .attr('ry', 0)
  //     .attr('fill', '#777777');
  // }
}
