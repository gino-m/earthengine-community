/**
 * Copyright 2021 The Google Earth Engine Community Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [START earthengine__apidocs__ee_geometry_multilinestring_bounds]
// Define a MultiLineString object.
var multiLineString = ee.Geometry.MultiLineString(
   [[[-122.088, 37.418], [-122.086, 37.422], [-122.082, 37.418]],
    [[-122.087, 37.416], [-122.083, 37.416], [-122.082, 37.419]]]);

// Apply the bounds method to the MultiLineString object.
var multiLineStringBounds = multiLineString.bounds();

// Print the result to the console.
print('multiLineString.bounds(...) =', multiLineStringBounds);

// Display relevant geometries on the map.
Map.setCenter(-122.085, 37.422, 15);
Map.addLayer(multiLineString,
             {'color': 'black'},
             'Geometry [black]: multiLineString');
Map.addLayer(multiLineStringBounds,
             {'color': 'red'},
             'Result [red]: multiLineString.bounds');
// [END earthengine__apidocs__ee_geometry_multilinestring_bounds]