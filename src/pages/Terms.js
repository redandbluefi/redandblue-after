import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';

class Terms extends Component {
  render() {
    return (
      <div style={{ width: '300px', margin: '1em' }}>
        <Helmet title="Terms" />
        <h1>
          <FormattedMessage id="page.terms" defaultMessage="Terms" />
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
          egestas sem, vel accumsan nulla. Vivamus vel tellus interdum, ornare
          erat ac, egestas enim. Vestibulum nec lectus ac justo viverra
          pharetra. Quisque vel elit vulputate, condimentum elit vel, mattis
          risus. Donec iaculis sapien feugiat, semper mauris vitae, interdum
          nisi. Fusce aliquet enim sed lacus pretium porttitor. In neque quam,
          condimentum non magna vel, condimentum ultrices odio. Fusce quam
          risus, mollis ac vehicula bibendum, vestibulum non est. Aenean elit
          arcu, dignissim quis imperdiet vel, finibus sit amet elit. Quisque at
          molestie justo, faucibus sollicitudin velit. Integer consectetur, sem
          eget porttitor fermentum, odio lacus tincidunt magna, non fringilla
          quam dolor sit amet dui. Nam elementum id ipsum a aliquam. Praesent
          placerat elementum fringilla. Nulla interdum consequat nisi, aliquet
          lobortis diam hendrerit ut. Nunc sit amet cursus arcu, vel lacinia
          neque.
        </p>
        <p>
          Aenean nisl lectus, venenatis at arcu ut, dignissim venenatis sapien.
          Nunc vestibulum sed mauris quis malesuada. Fusce eget urna accumsan,
          cursus eros at, dictum lorem. Aliquam egestas magna eu tempus
          scelerisque. Suspendisse dapibus ut tortor quis iaculis. Suspendisse
          id iaculis dolor. Mauris felis erat, semper non gravida at, mattis at
          ex. Sed eu arcu rutrum, interdum tellus vitae, condimentum dolor.
        </p>
        <p>
          Nulla convallis scelerisque enim, at blandit lectus rutrum id. Nulla
          pharetra sem varius fermentum mollis. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Quisque tempor
          enim sit amet nulla aliquet, aliquam semper ligula dignissim. Aliquam
          erat volutpat. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Proin pretium non enim in ultricies.
          Proin augue risus, consectetur at nisl dapibus, finibus viverra ex.
        </p>
        <p>
          Donec sit amet dui mollis, feugiat ligula eget, accumsan lectus.
          Maecenas varius arcu et ullamcorper finibus. Proin vehicula dolor non
          tincidunt euismod. Ut sollicitudin luctus ipsum, vel elementum est
          feugiat quis. Phasellus quis velit sit amet sem dignissim accumsan
          eget vel ipsum. In non nisl ac elit tincidunt sollicitudin. Proin nec
          lacus eget nisi efficitur auctor nec eget sem.
        </p>
        <p>
          Phasellus commodo ut enim quis tincidunt. Aliquam facilisis maximus
          nibh, ut bibendum sem commodo eget. Curabitur fringilla lorem elit,
          vitae commodo eros mattis ac. Vestibulum feugiat massa non venenatis
          vulputate. Maecenas ut blandit diam, eget imperdiet metus. Nulla in
          faucibus magna. Sed a dolor tellus. Etiam consequat sit amet erat
          tempus blandit. Curabitur sodales dignissim est et semper. Nam commodo
          blandit mauris, sit amet tincidunt nulla luctus ut.
        </p>
      </div>
    );
  }
}

export default Terms;
