import { Component } from '@angular/core';
import { Deck } from '@deck.gl/core/typed';
import { ScatterplotLayer } from '@deck.gl/layers/typed';
import { MapboxOverlay as DeckOverlay, MapboxLayer } from '@deck.gl/mapbox/typed';
import * as WeatherLayers from 'weatherlayers-gl';
import { ClipExtension } from '@deck.gl/extensions/typed';
import * as d3 from 'd3';
import { FlowmapLayer } from '@flowmap.gl/layers';
import { FlowColorsRGBA } from '@flowmap.gl/data';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  INITIAL_VIEW_STATE = {
    latitude: 37.8,
    longitude: -122.45,
    zoom: 15
  };

  deckglInit() {
    const deckgl = new Deck({
      initialViewState: this.INITIAL_VIEW_STATE,
      controller: true,
      layers: [
        new ScatterplotLayer({
          data: [
            { position: [-122.45, 37.8], color: [255, 0, 0], radius: 100 }
          ],
          getFillColor: d => d.color,
          getRadius: d => d.radius
        })
      ]
    })
  }
}
