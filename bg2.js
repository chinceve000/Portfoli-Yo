{
  var temperatures = [55, 63, 72, 64, 83, 92, 87, 74, 90, 84],
      dates = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      margin = { top: 0, right: 0, bottom: 30, left: 15 }
      height = 400 - margin.top - margin.bottom
      width = 600 - margin.left - margin.right;


   var  temperaturesColor,
        yScale,
        xScale,
        colors,
        tooltip,
        myChart;


   yScale = d3.scaleLinear()
      .domain([0, d3.max(temperatures)])
      .range([0, height]);

   xScale = d3.scaleBand()
      .domain(temperatures)
      .paddingInner(.3)
      .paddingOuter(.1)
      .range([0, width])

      yAxisValues = d3.scaleLinear()
      .domain([0, d3.max(temperatures)])
      .range([height, 0]);

      yAxisTicks = d3.axisLeft(yAxisValues)
        .ticks(10)

      xAxisValues = d3.scaleLinear()
      .domain([dates[0], d3.max(dates)])
      .range([0, width])

      xAxisTicks = d3.axisBottom(xAxisValues)
        .ticks(10)

   colors = d3.scaleLinear()
      .domain([0, 55, d3.max(temperatures)])
      .range(['#FFFFFF', '#18C6F5', '#F51818'])

   tooltip = d3.select('body')
                  .append('div')
                  .style('position', 'absolute')
                  .style('padding', '0 10px')
                  .style('background', 'white')
                  .style('opacity', 0);

   myChart =
        d3.select('#viz').append('svg')
          .attr('width', width + margin.left + margin.right)
          .attr('height', height + margin.top + margin.bottom)
          .append('g')
          .attr('transform',
          'translate(' + margin.left + ','+ margin.right + ')')

          .selectAll('rect').data(temperatures)
          .enter().append('rect')
            .attr('fill', colors)
            .attr('width', function(d) {
              return xScale.bandwidth();
            })
            .attr('height', 0)
            .attr('x', function(d) {
              return xScale(d);
            })
            .attr('y', height)

            .on('mouseover', function(d) {
              tooltip.transition().duration(200)
                     .style('opacity', .9)

              tooltip.html(
                '<div style="font-size: 2rem; font-weight: bold">' + d + '&deg;</div>'
              )


              .style('left', (d3.event.pageX -35) + 'px')
              .style('top', (d3.event.pageY -30) + 'px')

              temperaturesColor = this.style.fill;
              d3.select(this)
                .style('fill', '#C0EFB5')
            })

            .on('mouseout', function(d) {
              d3.select(this)
                .style('fill', temperaturesColor)
            });

            yGuide = d3.select('#viz svg').append('g')
                  .attr('transform', 'translate(20,0)')
                  .call(yAxisTicks)

          xGuide = d3.select('#viz svg').append('g')
                .attr('transform', 'translate(20, '+ height + ')')
                .call(xAxisTicks)


        myChart.transition()
          .attr('height', function(d) {
            return yScale(d);
          })
          .attr('y', function(d) {
            return height - yScale(d);
          })
          .delay(function(d, i) {
            return i * 20;
          })
          .duration(1000)
          .ease(d3.easeBounceOut)

};
