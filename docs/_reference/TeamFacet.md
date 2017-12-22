---
layout: page
title: TeamFacet
permalink: /reference/TeamFacet
---
**Kind**: global class  

* [TeamFacet](#TeamFacet)
    * [.accessLogs([opts], [optCb])](#TeamFacet+accessLogs)
    * [.billableInfo([opts], [optCb])](#TeamFacet+billableInfo)
    * [.info([optCb])](#TeamFacet+info)
    * [.integrationLogs([opts], [optCb])](#TeamFacet+integrationLogs)

<a name="TeamFacet+accessLogs"></a>

### teamFacet.accessLogs([opts], [optCb])
Gets the access logs for the current team.

**Kind**: instance method of <code>[TeamFacet](#TeamFacet)</code>  
**See**: [team.accessLogs](https://api.slack.com/methods/team.accessLogs)  

| Param | Type | Description |
| --- | --- | --- |
| [opts] | <code>Object</code> |  |
| [optCb] | <code>function</code> | Optional callback, if not using promises. |

<a name="TeamFacet+billableInfo"></a>

### teamFacet.billableInfo([opts], [optCb])
Gets billable users information for the current team.

**Kind**: instance method of <code>[TeamFacet](#TeamFacet)</code>  
**See**: [team.billableInfo](https://api.slack.com/methods/team.billableInfo)  

| Param | Type | Description |
| --- | --- | --- |
| [opts] | <code>Object</code> |  |
| opts.user | <code>?</code> | A user to retrieve the billable information for. Defaults to all users. |
| [optCb] | <code>function</code> | Optional callback, if not using promises. |

<a name="TeamFacet+info"></a>

### teamFacet.info([optCb])
Gets information about the current team.

**Kind**: instance method of <code>[TeamFacet](#TeamFacet)</code>  
**See**: [team.info](https://api.slack.com/methods/team.info)  

| Param | Type | Description |
| --- | --- | --- |
| [optCb] | <code>function</code> | Optional callback, if not using promises. |

<a name="TeamFacet+integrationLogs"></a>

### teamFacet.integrationLogs([opts], [optCb])
Gets the integration logs for the current team.

**Kind**: instance method of <code>[TeamFacet](#TeamFacet)</code>  
**See**: [team.integrationLogs](https://api.slack.com/methods/team.integrationLogs)  

| Param | Type | Description |
| --- | --- | --- |
| [opts] | <code>Object</code> |  |
| opts.service_id | <code>?</code> | Filter logs to this service. Defaults to all logs. |
| opts.app_id | <code>?</code> | Filter logs to this Slack app. Defaults to all logs. |
| opts.user | <code>?</code> | Filter logs generated by this user’s actions. Defaults to all logs. |
| opts.change_type | <code>?</code> | Filter logs with this change type. Defaults to all logs. |
| [optCb] | <code>function</code> | Optional callback, if not using promises. |
