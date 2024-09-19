---
title: Service blueprint example
description: A service blueprint of getting a burger
permalink: /methods/service-blueprint-example/
layout: layouts/default
tags: methods
eleventyExcludeFromCollections: true
---

<style type="text/css" media="print">
@page {
  margin: 1in;
}
</style>

<div class="layout--service-blueprint-example">
  <section class="category category--decide usa-section usa-prose">
    <section class="example-card grid-container">
      <a class="usa-button usa-button--base" href="{{ "/methods/decide/service-blueprint/" | url }}">Back to service blueprint card</a>

      <h1>Service blueprint example</h1>
      <div class="grid-col-10">

        This simple [service blueprint]({{ "/methods/decide/service-blueprint/" | url }}) is an example of how you might lay out the layers of your service. There are many ways to create a service blueprint and adapt the structure to best represent and capture your context.
      
        <p class="caption"><i>This is a table showing an example service blueprint. The top row is the journey of a customer ordering and eating at a fast food restaurant. Each column is a different step in the customer's journey. The remaining rows describe different parts of the service and the support provided at each step in the customer’s journey.</i></p>

      </div>
      <div class="usa-table-container--scrollable sticky-table-col" tabindex="0">
    <table class="usa-table service-blueprint">
        <tr>
          <th scope="row" class="role">

          {% image "assets/methods/img/18f-icons/user-check.svg" %}

          <strong>User steps</strong><br>
          The primary action someone takes when interacting with the service</th>
          <th scope="col" class="steps"><strong>Decide and look up how to get to the restaurant</strong></th>
          <th scope="col" class="steps"><strong>Arrive at the restaurant and order</strong></th>
          <th scope="col" class="steps"><strong>Find a table and eat the food</strong></th>
          <th scope="col" class="steps"><strong>Clean up and leave the restaurant</strong></th>
        </tr>
        <tr>
          <th scope="row">

          {% image "assets/methods/img/18f-icons/user-network--c.svg" %}

          <strong>Frontstage</strong><br>
          The online and offline interactions that users have with the service which includes the people, places, objects which users interact with</th>
          <td>
            <ul>
              <li>Website</li>
              <li>Newspaper</li>
              <li>Radio ad</li>
              <li>Address search</li>
            </ul>
          </td>
        <td>
          <ul>
            <li>Parking Lot</li>
            <li>Lobby</li>
            <li>Signage</li>
            <li>Electronic menu</li>
            <li>Counter</li>
            <li>Cash register</li>
            <li>Card reader</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Paper goods</li>
            <li>Condiment counter</li>
            <li>Condiment containers</li>
            <li>Napkins</li>
            <li>Cutlery</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Trash bin</li>
            <li>Tray return</li>
          </ul>
        </td>
        </tr>
        <tr>
          <th scope="row">

          {% image "assets/methods/img/18f-icons/settings.svg" %}

          <strong>Backstage</strong><br>
        Activities in the systems and
        processes that support the
        frontstage experience, but are not
        visible to users</th>
          <td>
            <ul>
              <li>
                Website maintenance
                <li>Customer service support and staffing</li>
                <li>Branding and advertising activities</li>
              </li>
            </ul>
          </td>
          <td>
            <ul>
              <li>Staff support and scheduling</li>
              <li>Payment system</li>
              <li>Menu upkeep</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>Staff support and scheduling</li>
              <li>Dining area maintenance</li>
            </ul>
          </td>
          <td>
          <ul>
              <li>Staff support and scheduling</li>
              <li>Waste collection</li>
          </ul>
          </td>
        </tr>
        <tr>
          <th scope="row">

          {% image "assets/methods/img/18f-icons/list-to-do-checked--c.svg" %}

          <strong>Support processes</strong><br>
          Activities executed by the rest of the organization or external partners — such as ongoing data management or software licensing — that don’t fall into the other rows</th>
          <td>
            <ul>
              <li>Advertising partnerships</li>
              <li>Website server support</li>
              <li>Branding and website efforts</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>Building license</li>
              <li>Food supply</li>
              <li>Gas, electricity, and water</li>
              <li>Food safety regulations</li>
              <li>Workers' union partnership</li>
              <li>Employee policies</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>Cutlery supply</li>
              <li>Cleaning supply</li>
              <li>Furniture layout design</li>
            </ul>
          </td>
          <td>
            <ul>
              <li>Waste management contracts</li>
              <li>Customer service staff support and scheduling</li>
            </ul>
          </td>
        </tr>
    </table>
  </div>
    </section>
  </section>
</div>
