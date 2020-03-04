var dataArray = [{x:5, y:20}, {x:10, y:15}, {x:15, y:20}, {x:20, y:25}, {x:25, y:20}, {x:20, y:15}, {x:10, y:25}, {x:5, y:20}];
var interpolateTypes = [d3.curveCardinalClosed, d3.curveNatural, d3.curveLinear, d3.curveMonotoneY];

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");

for (var p=0; p<6; p++) {
var line = d3.line()
                .x(function(d, i){ return d.x*6; })
                .y(function(d, i){ return d.y*4; })
                .curve(interpolateTypes[p]);
// https://github.com/d3/d3/blob/master/API.md#curves

var shiftX = p*250;
var shiftY = 0;

var chartGroup = svg.append("g").attr("class", "group"+p).attr("transform","translate("+shiftX+",0)");

chartGroup.append("path")
  .attr("fill", "none")
  .attr("stroke", "#BF83E3")
  .attr("d", line(dataArray));

chartGroup.selectAll("rect.grp")
          .data(dataArray)
          .enter().append("rect")
          .attr("class", function(d, i){ return "grp"+i; })
          .attr("fill", "#E3A583")
          .attr("x", function(d, i){ return d.x*6-4.5; })
          .attr("y", function(d, i){ return d.y*4-4.5; })
          .attr("width", "10")
          .attr("height", "10");

chartGroup.selectAll("circle.grp+p")
          .data(dataArray)
          .enter().append("circle")
          .attr("class", function(d, i){ return "grp"+i; })
          .attr("fill", "#83BDE3")
          .attr("cx", function(d, i){ return d.x*6; })
          .attr("cy", function(d, i){ return d.y*4; })
          .attr("r", "4");
}
