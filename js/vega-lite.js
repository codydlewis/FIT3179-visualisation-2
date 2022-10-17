// var vis1 = "./vega-lite/vis1.vg.json";
// vegaEmbed("#vis1", vis1).then(function (result) {
//     // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
// }).catch(console.error);



var allVisualisations = [
    ["./vega-lite/vis1.vg.json", "#vis1"],
    ["./vega-lite/vis2.vg.json", "#vis2"],
    ["./vega-lite/vis4.vg.json", "#vis4"],
    ["./vega-lite/vis5.vg.json", "#vis5"],
    ["./vega-lite/vis6.vg.json", "#vis6"],
    ["./vega-lite/time_day.vg.json", "#vis-time-day"],
    ["./vega-lite/alcohol.vg.json", "#alcohol"],
    ["./vega-lite/year_lga.vg.json", "#year-lga"],
    ["./vega-lite/horizon.vg.json", "#horizon"],
    ["./vega-lite/injury_lga.vg.json", "#injury-lga"],
];

for (const vis of allVisualisations) {
    // console.log(vis[0], vis[1]);
    vegaEmbed(vis[1], vis[0], {"actions": false});
};



