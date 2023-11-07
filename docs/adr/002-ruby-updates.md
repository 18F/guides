# Ruby updates for existing guides

## Status
Proposed

## Context
Cloud.gov pages [announced](https://cloud.gov/2023/05/24/cloud-gov-pages-jekyll-ruby-upgrade/) in May 2023 that they will stop supporting builds with Ruby 2.7 in six months. We are now at the end of that six month period. Most of the existing 18F guides use Ruby 2.7, and it is likely that we will not be able to update the content on individual guide sites unless we upgrade them to Ruby 3.x. 

The current replatforming effort is moving the guides off of Jekyll and onto Eleventy, which does not use Ruby. One exception to this is the Methods site.  We have estimated that replatforming the Methods site will likely take more effort than that replatforming of the other guides and have put off that task. Consequently, Methods will continue using Jekyll and Ruby for a longer period than the other guides.

One of the operating principles during the replatforming effort has been that we will not make any changes to the existing guide, unless there is an urgent or critical need.

## Decision
We will not update the existing guides to Ruby 3.x, with the exception of the Methods site. We will update the ruby version of the Methods site because that site will continue to use Jeykll for an unknown but extended period of time.  

## Consequences 
At some point in the near future (possibly now), we will not be able to update the existing guide content. The guides will continue working at their current URL in their current state. 

Some level of effort and time will need to be put forward to upgrading the Methods site. However by not updating the remaining guides sites, we are saving time and resources and can put those toward the replatforming effort. 
