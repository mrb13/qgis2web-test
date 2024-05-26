var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_elementaryschoolsneighborhoods_1 = new ol.format.GeoJSON();
var features_elementaryschoolsneighborhoods_1 = format_elementaryschoolsneighborhoods_1.readFeatures(json_elementaryschoolsneighborhoods_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_elementaryschoolsneighborhoods_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_elementaryschoolsneighborhoods_1.addFeatures(features_elementaryschoolsneighborhoods_1);
var lyr_elementaryschoolsneighborhoods_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_elementaryschoolsneighborhoods_1, 
                style: style_elementaryschoolsneighborhoods_1,
                popuplayertitle: "elementary schools neighborhoods",
                interactive: true,
                    title: '<img src="styles/legend/elementaryschoolsneighborhoods_1.png" /> elementary schools neighborhoods'
                });

lyr_OpenStreetMap_0.setVisible(true);lyr_elementaryschoolsneighborhoods_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_elementaryschoolsneighborhoods_1];
lyr_elementaryschoolsneighborhoods_1.set('fieldAliases', {'zdm_sch_id': 'zdm_sch_id', 'district-schools3_School Name': 'district-schools3_School Name', 'district-schools3_District': 'district-schools3_District', 'district-schools3_file1': 'district-schools3_file1', 'USNews_student_pop': 'USNews_student_pop', 'USNews_url': 'USNews_url', 'USNews_rank1': 'USNews_rank1', 'USNews_rank2': 'USNews_rank2', 'zelma_ELA proficiency (2022-23)': 'zelma_ELA proficiency (2022-23)', 'zelma_Math proficiency (2022-23)': 'zelma_Math proficiency (2022-23)', 'Capped?': 'Capped?', 'Overflow': 'Overflow', 'YearRound': 'YearRound', 'YearRound Track': 'YearRound Track', });
lyr_elementaryschoolsneighborhoods_1.set('fieldImages', {'zdm_sch_id': 'TextEdit', 'district-schools3_School Name': 'TextEdit', 'district-schools3_District': 'TextEdit', 'district-schools3_file1': 'TextEdit', 'USNews_student_pop': 'TextEdit', 'USNews_url': 'TextEdit', 'USNews_rank1': 'TextEdit', 'USNews_rank2': 'TextEdit', 'zelma_ELA proficiency (2022-23)': 'TextEdit', 'zelma_Math proficiency (2022-23)': 'TextEdit', 'Capped?': 'TextEdit', 'Overflow': 'TextEdit', 'YearRound': 'TextEdit', 'YearRound Track': 'TextEdit', });
lyr_elementaryschoolsneighborhoods_1.set('fieldLabels', {'zdm_sch_id': 'no label', 'district-schools3_School Name': 'no label', 'district-schools3_District': 'no label', 'district-schools3_file1': 'no label', 'USNews_student_pop': 'no label', 'USNews_url': 'no label', 'USNews_rank1': 'no label', 'USNews_rank2': 'no label', 'zelma_ELA proficiency (2022-23)': 'no label', 'zelma_Math proficiency (2022-23)': 'no label', 'Capped?': 'no label', 'Overflow': 'no label', 'YearRound': 'no label', 'YearRound Track': 'no label', });
lyr_elementaryschoolsneighborhoods_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});