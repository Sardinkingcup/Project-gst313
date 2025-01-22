var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_malaysia_1 = new ol.format.GeoJSON();
var features_malaysia_1 = format_malaysia_1.readFeatures(json_malaysia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_malaysia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_malaysia_1.addFeatures(features_malaysia_1);
var lyr_malaysia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_malaysia_1, 
                style: style_malaysia_1,
                popuplayertitle: 'malaysia',
                interactive: true,
    title: 'malaysia<br />\
    <img src="styles/legend/malaysia_1_0.png" /> 0 - 1<br />\
    <img src="styles/legend/malaysia_1_1.png" /> 1 - 11<br />\
    <img src="styles/legend/malaysia_1_2.png" /> 11 - 32<br />\
    <img src="styles/legend/malaysia_1_3.png" /> 32 - 108<br />\
    <img src="styles/legend/malaysia_1_4.png" /> 108 - 2204<br />'
        });

lyr_GoogleTerrain_0.setVisible(true);lyr_malaysia_1.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_malaysia_1];
lyr_malaysia_1.set('fieldAliases', {'state': 'state', 'ADM1_PCODE': 'ADM1_PCODE', 'country': 'country', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'year_2021': 'year_2021', 'cases': 'cases', 'years_2022': 'years_2022', 'Field': 'Field', });
lyr_malaysia_1.set('fieldImages', {'state': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'country': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'year_2021': 'TextEdit', 'cases': 'TextEdit', 'years_2022': 'TextEdit', 'Field': 'TextEdit', });
lyr_malaysia_1.set('fieldLabels', {'state': 'inline label - visible with data', 'ADM1_PCODE': 'hidden field', 'country': 'inline label - visible with data', 'ADM0_PCODE': 'hidden field', 'date': 'hidden field', 'validOn': 'hidden field', 'validTo': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'year_2021': 'inline label - visible with data', 'cases': 'inline label - visible with data', 'years_2022': 'inline label - visible with data', 'Field': 'hidden field', });
lyr_malaysia_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});