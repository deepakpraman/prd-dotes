"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2718],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=l(r),u=a,d=h["".concat(c,".").concat(u)]||h[u]||m[u]||s;return r?i.createElement(d,n(n({ref:t},p),{},{components:r})):i.createElement(d,n({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,n=new Array(s);n[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,n[1]=o;for(var l=2;l<s;l++)n[l]=r[l];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9316:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=r(7462),a=(r(7294),r(3905));const s={title:"Microservices Design Patterns",date:new Date("2022-07-11T21:42:17.000Z")},n="Data Management",o={unversionedId:"Design/Microservices-Design-Patterns",id:"Design/Microservices-Design-Patterns",title:"Microservices Design Patterns",description:"- Database per Service\xa0- each service has its own private database",source:"@site/docs/Design/Microservices-Design-Patterns.md",sourceDirName:"Design",slug:"/Design/Microservices-Design-Patterns",permalink:"/prd-dotes/docs/Design/Microservices-Design-Patterns",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Design/Microservices-Design-Patterns.md",tags:[],version:"current",frontMatter:{title:"Microservices Design Patterns",date:"2022-07-11T21:42:17.000Z"},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/prd-dotes/docs/tutorial-extras/translate-your-site"},next:{title:"Microservices and Spring Boot",permalink:"/prd-dotes/docs/Design/Microservices-and-Spring-Boot"}},c={},l=[],p={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-management"},"Data Management"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/data/database-per-service.html"},"Database per Service"),"\xa0- each service has its own private database"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/data/shared-database.html"},"Shared database"),"\xa0- services share a database"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/data/saga.html"},"Saga"),"\xa0- use sagas, which a sequences of local transactions, to maintain data consistency across services"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/data/api-composition.html"},"API Composition"),"\xa0- implement queries by invoking the services that own the data and performing an in-memory join"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/data/cqrs.html"},"CQRS"),"\xa0- implement queries by maintaining one or more materialised views that can be efficiently queried"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/data/domain-event.html"},"Domain event"),"\xa0- publish an event whenever data changes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/data/event-sourcing.html"},"Event sourcing"),"\xa0- persist aggregates as a sequence of events")),(0,a.kt)("h1",{id:"transactional-messaging"},(0,a.kt)("strong",{parentName:"h1"},"Transactional messaging")),(0,a.kt)("p",null,"How to publish messages as part of a database transaction?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/data/transactional-outbox.html"},"Transactional outbox")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/data/transaction-log-tailing.html"},"Transaction log tailing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/data/polling-publisher.html"},"Polling publisher"))),(0,a.kt)("h1",{id:"testing"},(0,a.kt)("strong",{parentName:"h1"},"Testing")),(0,a.kt)("p",null,"How to make testing easier?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/testing/service-integration-contract-test.html"},"Consumer-driven contract test"),"\xa0- a test suite for a service that is written by the developers of another service that consumes it"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/testing/service-integration-contract-test.html"},"Consumer-side contract test"),"\xa0- a test suite for a service client (e.g. another service) that verifies that it can communicate with the service"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/testing/service-component-test.html"},"Service component sest"),"\xa0- a test suite that tests a service in isolation using test doubles for any services that it invokes")),(0,a.kt)("h1",{id:"deployment-patterns"},(0,a.kt)("strong",{parentName:"h1"},"Deployment patterns")),(0,a.kt)("p",null,"How to deploy an application\u2019s services?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/deployment/multiple-services-per-host.html"},"Multiple service instances per host"),"\xa0- deploy multiple service instances on a single host"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/deployment/single-service-per-host.html"},"Service instance per host"),"\xa0- deploy each service instance in its own host"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/deployment/service-per-vm.html"},"Service instance per VM"),"\xa0- deploy each service instance in its VM"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/deployment/service-per-container.html"},"Service instance per Container"),"\xa0- deploy each service instance in its container"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/deployment/serverless-deployment.html"},"Serverless deployment"),"\xa0- deploy a service using serverless deployment platform"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/deployment/service-deployment-platform.html"},"Service deployment platform"),"\xa0- deploy services using a highly automated deployment platform that provides a service abstraction")),(0,a.kt)("h1",{id:"cross-cutting-concerns"},(0,a.kt)("strong",{parentName:"h1"},"Cross cutting concerns")),(0,a.kt)("p",null,"How to handle cross cutting concerns?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/microservice-chassis.html"},"Microservice chassis"),"\xa0- a framework that handles cross-cutting concerns and simplifies the development of services"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/externalized-configuration.html"},"Externalized configuration"),"\xa0- externalize all configuration such as database location and credentials"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/service-template.html"},"Service Template"),"\xa0- a template that implements standard cross cutting concerns and is intended to be copied by a developer in order to quickly start developing a new service")),(0,a.kt)("h1",{id:"communication-patterns"},(0,a.kt)("strong",{parentName:"h1"},"Communication patterns")),(0,a.kt)("h1",{id:"style"},(0,a.kt)("strong",{parentName:"h1"},"Style")),(0,a.kt)("p",null,"Which communication mechanisms do services use to communicate with each other and their external clients?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/communication-style/rpi.html"},"Remote Procedure Invocation"),"\xa0- use an RPI-based protocol for inter-service communication"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/communication-style/messaging.html"},"Messaging"),"\xa0- use asynchronous messaging for inter-service communication"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/communication-style/domain-specific.html"},"Domain-specific protocol"),"\xa0- use a domain-specific protocol"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/communication-style/idempotent-consumer.html"},"Idempotent Consumer"),"\xa0- ensure that message consumers can cope with being invoked multiple times with the same message")),(0,a.kt)("h1",{id:"external-api"},(0,a.kt)("strong",{parentName:"h1"},"External API")),(0,a.kt)("p",null,"How do external clients communicate with the services?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/apigateway.html"},"API gateway"),"\xa0- a service that provides each client with unified interface to services"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/apigateway.html"},"Backend for front-end"),"\xa0- a separate API gateway for each kind of client")),(0,a.kt)("h1",{id:"service-discovery"},(0,a.kt)("strong",{parentName:"h1"},"Service discovery")),(0,a.kt)("p",null,"How does the client of an RPI-based service discover the network location of a service instance?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/client-side-discovery.html"},"Client-side discovery"),"\xa0- client queries a service registry to discover the locations of service instances"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/server-side-discovery.html"},"Server-side discovery"),"\xa0- router queries a service registry to discover the locations of service instances"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/service-registry.html"},"Service registry"),"\xa0- a database of service instance locations"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/self-registration.html"},"Self registration"),"\xa0- service instance registers itself with the service registry"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/3rd-party-registration.html"},"3rd party registration"),"\xa0- a 3rd party registers a service instance with the service registry")),(0,a.kt)("h1",{id:"reliability"},(0,a.kt)("strong",{parentName:"h1"},"Reliability")),(0,a.kt)("p",null,"How to prevent a network or service failure from cascading to other services?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/reliability/circuit-breaker.html"},"Circuit Breaker"),"\xa0- invoke a remote service via a proxy that fails immediately when the failure rate of the remote call exceeds a threshold")),(0,a.kt)("h1",{id:"security"},(0,a.kt)("strong",{parentName:"h1"},"Security")),(0,a.kt)("p",null,"How to communicate the identity of the requestor to the services that handle the request?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/security/access-token.html"},"Access Token"),"\xa0- a token that securely stores information about user that is exchanged between services")),(0,a.kt)("h1",{id:"observability"},(0,a.kt)("strong",{parentName:"h1"},"Observability")),(0,a.kt)("p",null,"How to understand the behavior of an application and troubleshoot problems?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/observability/application-logging.html"},"Log aggregation"),"\xa0- aggregate application logs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/observability/application-metrics.html"},"Application metrics"),"\xa0- instrument a service\u2019s code to gather statistics about operations"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/observability/audit-logging.html"},"Audit logging"),"\xa0- record user activity in a database"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/observability/distributed-tracing.html"},"Distributed tracing"),"\xa0- instrument services with code that assigns each external request an unique identifier that is passed between services. Record information (e.g. start time, end time) about the work (e.g. service requests) performed when handling the external request in a centralized service"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/observability/exception-tracking.html"},"Exception tracking"),"\xa0- report all exceptions to a centralized exception tracking service that aggregates and tracks exceptions and notifies developers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/observability/health-check-api.html"},"Health check API"),"\xa0- service API (e.g. HTTP endpoint) that returns the health of the service and is intended to be pinged, for example, by a monitoring service"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/observability/log-deployments-and-changes.html"},"Log deployments and changes"))),(0,a.kt)("h1",{id:"ui-patterns"},(0,a.kt)("strong",{parentName:"h1"},"UI patterns")),(0,a.kt)("p",null,"How to implement a UI screen or page that displays data from multiple services?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/ui/server-side-page-fragment-composition.html"},"Server-side page fragment composition"),"\xa0- build a webpage on the server by composing HTML fragments generated by multiple, business capability/subdomain-specific web applications"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://microservices.io/patterns/ui/client-side-ui-composition.html"},"Client-side UI composition"),"\xa0- Build a UI on the client by composing UI fragments rendered by multiple, business capability/subdomain-specific UI components")))}m.isMDXComponent=!0}}]);