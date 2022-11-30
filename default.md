# 小鹿入学小程序


**简介**:小鹿入学小程序


**HOST**:localhost:8089


**联系人**:


**Version**:1.0


**接口路径**:/v2/api-docs


[TOC]






# 优秀学员


## 查询优秀学员详情


**接口地址**:`/wechat/excellent/info/{studentId}`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|studentId|studentId|path|true|integer(int32)||
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应类«优秀学员»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|响应数据|优秀学员|优秀学员|
|&emsp;&emsp;classId|班级id|integer(int32)||
|&emsp;&emsp;className|班级名称|string||
|&emsp;&emsp;createBy|创建者|integer(int32)||
|&emsp;&emsp;createDate|创建时间|string(date-time)||
|&emsp;&emsp;education|学历|string||
|&emsp;&emsp;id|优秀学员id|integer(int32)||
|&emsp;&emsp;isDelete|是否删除 0:否 1:是|boolean||
|&emsp;&emsp;pageNum|页码|integer(int32)||
|&emsp;&emsp;pageSize|行数|integer(int32)||
|&emsp;&emsp;salary|就业薪资|string||
|&emsp;&emsp;studentAge|年龄|string||
|&emsp;&emsp;studentId|学员id|integer(int32)||
|&emsp;&emsp;studentName|学员姓名|string||
|&emsp;&emsp;total|总条数|integer(int64)||
|&emsp;&emsp;updateBy|更新者|integer(int32)||
|&emsp;&emsp;updateDate|更新时间|string(date-time)||
|&emsp;&emsp;userId||integer(int32)||
|&emsp;&emsp;workCompany|入职公司|string||
|&emsp;&emsp;workDate|就业时间|string(date-time)||
|&emsp;&emsp;workWay|就业途径|string||
|&emsp;&emsp;wrokCity|工作城市|string||
|message|响应消息|string||
|resultCode|响应码 200 成功)|integer(int32)|integer(int32)|


**响应示例**:
```javascript
{
	"data": {
		"classId": 0,
		"className": "",
		"createBy": 0,
		"createDate": "",
		"education": "",
		"id": 0,
		"isDelete": true,
		"pageNum": 1,
		"pageSize": 1,
		"salary": "",
		"studentAge": "",
		"studentId": 0,
		"studentName": "",
		"total": 1,
		"updateBy": 0,
		"updateDate": "",
		"userId": 0,
		"workCompany": "",
		"workDate": "",
		"workWay": "",
		"wrokCity": ""
	},
	"message": "成功",
	"resultCode": 10000
}
```


## 查询优秀学员列表


**接口地址**:`/wechat/excellent/list`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"classId": 0,
	"className": "",
	"createBy": 0,
	"createDate": "",
	"education": "",
	"id": 0,
	"isDelete": true,
	"pageNum": 1,
	"pageSize": 1,
	"salary": "",
	"studentAge": "",
	"studentId": 0,
	"studentName": "",
	"total": 1,
	"updateBy": 0,
	"updateDate": "",
	"userId": 0,
	"workCompany": "",
	"workDate": "",
	"workWay": "",
	"wrokCity": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|excellentStudent|excellentStudent|body|true|优秀学员|优秀学员|
|&emsp;&emsp;classId|班级id||false|integer(int32)||
|&emsp;&emsp;className|班级名称||false|string||
|&emsp;&emsp;createBy|创建者||false|integer(int32)||
|&emsp;&emsp;createDate|创建时间||false|string(date-time)||
|&emsp;&emsp;education|学历||false|string||
|&emsp;&emsp;id|优秀学员id||false|integer(int32)||
|&emsp;&emsp;isDelete|是否删除 0:否 1:是||false|boolean||
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|行数||false|integer(int32)||
|&emsp;&emsp;salary|就业薪资||false|string||
|&emsp;&emsp;studentAge|年龄||false|string||
|&emsp;&emsp;studentId|学员id||false|integer(int32)||
|&emsp;&emsp;studentName|学员姓名||false|string||
|&emsp;&emsp;total|总条数||false|integer(int64)||
|&emsp;&emsp;updateBy|更新者||false|integer(int32)||
|&emsp;&emsp;updateDate|更新时间||false|string(date-time)||
|&emsp;&emsp;userId|||false|integer(int32)||
|&emsp;&emsp;workCompany|入职公司||false|string||
|&emsp;&emsp;workDate|就业时间||false|string(date-time)||
|&emsp;&emsp;workWay|就业途径||false|string||
|&emsp;&emsp;wrokCity|工作城市||false|string||
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应类«优秀学员»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|响应数据|优秀学员|优秀学员|
|&emsp;&emsp;classId|班级id|integer(int32)||
|&emsp;&emsp;className|班级名称|string||
|&emsp;&emsp;createBy|创建者|integer(int32)||
|&emsp;&emsp;createDate|创建时间|string(date-time)||
|&emsp;&emsp;education|学历|string||
|&emsp;&emsp;id|优秀学员id|integer(int32)||
|&emsp;&emsp;isDelete|是否删除 0:否 1:是|boolean||
|&emsp;&emsp;pageNum|页码|integer(int32)||
|&emsp;&emsp;pageSize|行数|integer(int32)||
|&emsp;&emsp;salary|就业薪资|string||
|&emsp;&emsp;studentAge|年龄|string||
|&emsp;&emsp;studentId|学员id|integer(int32)||
|&emsp;&emsp;studentName|学员姓名|string||
|&emsp;&emsp;total|总条数|integer(int64)||
|&emsp;&emsp;updateBy|更新者|integer(int32)||
|&emsp;&emsp;updateDate|更新时间|string(date-time)||
|&emsp;&emsp;userId||integer(int32)||
|&emsp;&emsp;workCompany|入职公司|string||
|&emsp;&emsp;workDate|就业时间|string(date-time)||
|&emsp;&emsp;workWay|就业途径|string||
|&emsp;&emsp;wrokCity|工作城市|string||
|message|响应消息|string||
|resultCode|响应码 200 成功)|integer(int32)|integer(int32)|


**响应示例**:
```javascript
{
	"data": {
		"classId": 0,
		"className": "",
		"createBy": 0,
		"createDate": "",
		"education": "",
		"id": 0,
		"isDelete": true,
		"pageNum": 1,
		"pageSize": 1,
		"salary": "",
		"studentAge": "",
		"studentId": 0,
		"studentName": "",
		"total": 1,
		"updateBy": 0,
		"updateDate": "",
		"userId": 0,
		"workCompany": "",
		"workDate": "",
		"workWay": "",
		"wrokCity": ""
	},
	"message": "成功",
	"resultCode": 10000
}
```


# 公告管理


## 查询公告详情


**接口地址**:`/wechat/notice/info/{noticeId}`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|noticeId|noticeId|path|true|integer(int32)||
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应类«通知公告»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|响应数据|通知公告|通知公告|
|&emsp;&emsp;createBy|创建者|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;noticeContent|公告内容|string||
|&emsp;&emsp;noticeId|公告ID|integer(int32)||
|&emsp;&emsp;noticeTitle|公告标题|string||
|&emsp;&emsp;noticeType|公告类型（1通知 2公告）|string||
|&emsp;&emsp;pageNum|页码|integer(int32)||
|&emsp;&emsp;pageSize|行数|integer(int32)||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;status|公告状态（0正常 1关闭）|string||
|&emsp;&emsp;total|总条数|integer(int64)||
|&emsp;&emsp;updateBy|更新者|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;userId||integer(int32)||
|message|响应消息|string||
|resultCode|响应码 200 成功)|integer(int32)|integer(int32)|


**响应示例**:
```javascript
{
	"data": {
		"createBy": "",
		"createTime": "",
		"noticeContent": "",
		"noticeId": 0,
		"noticeTitle": "",
		"noticeType": "",
		"pageNum": 1,
		"pageSize": 1,
		"remark": "",
		"status": "",
		"total": 1,
		"updateBy": "",
		"updateTime": "",
		"userId": 0
	},
	"message": "成功",
	"resultCode": 10000
}
```


## 查询公告列表


**接口地址**:`/wechat/notice/list`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"createBy": "",
	"createTime": "",
	"noticeContent": "",
	"noticeId": 0,
	"noticeTitle": "",
	"noticeType": "",
	"pageNum": 1,
	"pageSize": 1,
	"remark": "",
	"status": "",
	"total": 1,
	"updateBy": "",
	"updateTime": "",
	"userId": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|notice|notice|body|true|通知公告|通知公告|
|&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;noticeContent|公告内容||false|string||
|&emsp;&emsp;noticeId|公告ID||false|integer(int32)||
|&emsp;&emsp;noticeTitle|公告标题||false|string||
|&emsp;&emsp;noticeType|公告类型（1通知 2公告）||false|string||
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|行数||false|integer(int32)||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;status|公告状态（0正常 1关闭）||false|string||
|&emsp;&emsp;total|总条数||false|integer(int64)||
|&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;userId|||false|integer(int32)||
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应类«通知公告»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|响应数据|通知公告|通知公告|
|&emsp;&emsp;createBy|创建者|string||
|&emsp;&emsp;createTime|创建时间|string(date-time)||
|&emsp;&emsp;noticeContent|公告内容|string||
|&emsp;&emsp;noticeId|公告ID|integer(int32)||
|&emsp;&emsp;noticeTitle|公告标题|string||
|&emsp;&emsp;noticeType|公告类型（1通知 2公告）|string||
|&emsp;&emsp;pageNum|页码|integer(int32)||
|&emsp;&emsp;pageSize|行数|integer(int32)||
|&emsp;&emsp;remark|备注|string||
|&emsp;&emsp;status|公告状态（0正常 1关闭）|string||
|&emsp;&emsp;total|总条数|integer(int64)||
|&emsp;&emsp;updateBy|更新者|string||
|&emsp;&emsp;updateTime|更新时间|string(date-time)||
|&emsp;&emsp;userId||integer(int32)||
|message|响应消息|string||
|resultCode|响应码 200 成功)|integer(int32)|integer(int32)|


**响应示例**:
```javascript
{
	"data": {
		"createBy": "",
		"createTime": "",
		"noticeContent": "",
		"noticeId": 0,
		"noticeTitle": "",
		"noticeType": "",
		"pageNum": 1,
		"pageSize": 1,
		"remark": "",
		"status": "",
		"total": 1,
		"updateBy": "",
		"updateTime": "",
		"userId": 0
	},
	"message": "成功",
	"resultCode": 10000
}
```


# 咨询帮助管理


## 查询咨询帮助详情


**接口地址**:`/wechat/help/info/{helpId}`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|helpId|helpId|path|true|integer(int32)||
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应类«面试题分类»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|响应数据|面试题分类|面试题分类|
|&emsp;&emsp;createBy|创建者|integer(int32)||
|&emsp;&emsp;createDate|创建时间|string(date-time)||
|&emsp;&emsp;id|试题分类id|integer(int32)||
|&emsp;&emsp;imgUrl|图片链接|string||
|&emsp;&emsp;isDelete|是否删除 0:否 1:是|boolean||
|&emsp;&emsp;pageNum|页码|integer(int32)||
|&emsp;&emsp;pageSize|行数|integer(int32)||
|&emsp;&emsp;source|来源|string||
|&emsp;&emsp;title|面试题标题|string||
|&emsp;&emsp;total|总条数|integer(int64)||
|&emsp;&emsp;type|类型|string||
|&emsp;&emsp;updateBy|更新者|integer(int32)||
|&emsp;&emsp;updateDate|更新时间|string(date-time)||
|&emsp;&emsp;userId||integer(int32)||
|message|响应消息|string||
|resultCode|响应码 200 成功)|integer(int32)|integer(int32)|


**响应示例**:
```javascript
{
	"data": {
		"createBy": 0,
		"createDate": "",
		"id": 0,
		"imgUrl": "",
		"isDelete": true,
		"pageNum": 1,
		"pageSize": 1,
		"source": "",
		"title": "",
		"total": 1,
		"type": "",
		"updateBy": 0,
		"updateDate": "",
		"userId": 0
	},
	"message": "成功",
	"resultCode": 10000
}
```


## 查询咨询帮助列表


**接口地址**:`/wechat/help/list`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"addres": "",
	"createBy": 0,
	"createDate": "",
	"id": 0,
	"isDelete": true,
	"name": "",
	"pageNum": 1,
	"pageSize": 1,
	"phone": "",
	"total": 1,
	"updateBy": 0,
	"updateDate": "",
	"userId": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|consultHelp|consultHelp|body|true|咨询帮助|咨询帮助|
|&emsp;&emsp;addres|联系地址||false|string||
|&emsp;&emsp;createBy|创建者||false|integer(int32)||
|&emsp;&emsp;createDate|创建时间||false|string(date-time)||
|&emsp;&emsp;id|咨询帮助id||false|integer(int32)||
|&emsp;&emsp;isDelete|是否删除 0:否 1:是||false|boolean||
|&emsp;&emsp;name|姓名||false|string||
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|行数||false|integer(int32)||
|&emsp;&emsp;phone|联系方式||false|string||
|&emsp;&emsp;total|总条数||false|integer(int64)||
|&emsp;&emsp;updateBy|更新者||false|integer(int32)||
|&emsp;&emsp;updateDate|更新日期||false|string(date-time)||
|&emsp;&emsp;userId|||false|integer(int32)||
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应类«咨询帮助»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|响应数据|咨询帮助|咨询帮助|
|&emsp;&emsp;addres|联系地址|string||
|&emsp;&emsp;createBy|创建者|integer(int32)||
|&emsp;&emsp;createDate|创建时间|string(date-time)||
|&emsp;&emsp;id|咨询帮助id|integer(int32)||
|&emsp;&emsp;isDelete|是否删除 0:否 1:是|boolean||
|&emsp;&emsp;name|姓名|string||
|&emsp;&emsp;pageNum|页码|integer(int32)||
|&emsp;&emsp;pageSize|行数|integer(int32)||
|&emsp;&emsp;phone|联系方式|string||
|&emsp;&emsp;total|总条数|integer(int64)||
|&emsp;&emsp;updateBy|更新者|integer(int32)||
|&emsp;&emsp;updateDate|更新日期|string(date-time)||
|&emsp;&emsp;userId||integer(int32)||
|message|响应消息|string||
|resultCode|响应码 200 成功)|integer(int32)|integer(int32)|


**响应示例**:
```javascript
{
	"data": {
		"addres": "",
		"createBy": 0,
		"createDate": "",
		"id": 0,
		"isDelete": true,
		"name": "",
		"pageNum": 1,
		"pageSize": 1,
		"phone": "",
		"total": 1,
		"updateBy": 0,
		"updateDate": "",
		"userId": 0
	},
	"message": "成功",
	"resultCode": 10000
}
```


# 学员信息管理


## 入学信息详情


**接口地址**:`/wechat/student/info`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应类«StudentInfo»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|响应数据|StudentInfo|StudentInfo|
|&emsp;&emsp;addressInfo|详细地址|string||
|&emsp;&emsp;admissionCode|入学码|string||
|&emsp;&emsp;authTime|小程序授权时间|string(date-time)||
|&emsp;&emsp;avatarUrl|头像地址|string||
|&emsp;&emsp;birthDate|出生日期|string||
|&emsp;&emsp;city|城市|string||
|&emsp;&emsp;classId|班级id|integer(int32)||
|&emsp;&emsp;className|班级名称|string||
|&emsp;&emsp;createBy|创建人|integer(int32)||
|&emsp;&emsp;createDate|创建时间|string(date-time)||
|&emsp;&emsp;currentDate|协议签署日期|string||
|&emsp;&emsp;currentSalary|目前薪资|string||
|&emsp;&emsp;currentState|当前状态：在职 待业 再读|string||
|&emsp;&emsp;education|学历|string||
|&emsp;&emsp;emergencyContact|紧急联系人|string||
|&emsp;&emsp;emergencyPhone|紧急联系人电话|string||
|&emsp;&emsp;emergencyRelation|与紧急联系人关系|string||
|&emsp;&emsp;expireTime|token 过期时间戳|integer(int64)||
|&emsp;&emsp;familyAddress|家庭地址|string||
|&emsp;&emsp;frontStage|前端阶段|string||
|&emsp;&emsp;gender|性别 0:男 1：女|string||
|&emsp;&emsp;graduation|是否毕业 0:否 1：是|string||
|&emsp;&emsp;graduationDate|毕业时间|string||
|&emsp;&emsp;guideMobile|学校导员电话|string||
|&emsp;&emsp;guideName|学校导员姓名|string||
|&emsp;&emsp;id|用户id|integer(int32)||
|&emsp;&emsp;idCard|身份证|string||
|&emsp;&emsp;major|专业|string||
|&emsp;&emsp;name|姓名|string||
|&emsp;&emsp;nickName|昵称|string||
|&emsp;&emsp;openId|小程序openid|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;province|省|string||
|&emsp;&emsp;qq|qq|string||
|&emsp;&emsp;school|就读学校|string||
|&emsp;&emsp;studyStatus|就读大几 0:大一 1:大二 2:大三 3:应届生 4:其它|string||
|&emsp;&emsp;targetObtainCity|目标就业城市|string||
|&emsp;&emsp;targetSalary|期望薪资|string||
|&emsp;&emsp;teacher|顾问老师|string||
|&emsp;&emsp;updateBy|更新人|integer(int32)||
|&emsp;&emsp;updateDate|更新时间|string(date-time)||
|&emsp;&emsp;wechat|微信号|string||
|message|响应消息|string||
|resultCode|响应码 200 成功)|integer(int32)|integer(int32)|


**响应示例**:
```javascript
{
	"data": {
		"addressInfo": "",
		"admissionCode": "",
		"authTime": "",
		"avatarUrl": "",
		"birthDate": "",
		"city": "",
		"classId": 0,
		"className": "",
		"createBy": 0,
		"createDate": "",
		"currentDate": "",
		"currentSalary": "",
		"currentState": "",
		"education": "",
		"emergencyContact": "",
		"emergencyPhone": "",
		"emergencyRelation": "",
		"expireTime": 0,
		"familyAddress": "",
		"frontStage": "",
		"gender": "",
		"graduation": "",
		"graduationDate": "",
		"guideMobile": "",
		"guideName": "",
		"id": 0,
		"idCard": "",
		"major": "",
		"name": "",
		"nickName": "",
		"openId": "",
		"phone": "",
		"province": "",
		"qq": "",
		"school": "",
		"studyStatus": "",
		"targetObtainCity": "",
		"targetSalary": "",
		"teacher": "",
		"updateBy": 0,
		"updateDate": "",
		"wechat": ""
	},
	"message": "成功",
	"resultCode": 10000
}
```


## 入学信息详情(classId)


**接口地址**:`/wechat/student/queyrInfoByClassId/{classId}`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|classId|classId|path|true|integer(int32)||
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应类«StudentInfo»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|响应数据|StudentInfo|StudentInfo|
|&emsp;&emsp;addressInfo|详细地址|string||
|&emsp;&emsp;admissionCode|入学码|string||
|&emsp;&emsp;authTime|小程序授权时间|string(date-time)||
|&emsp;&emsp;avatarUrl|头像地址|string||
|&emsp;&emsp;birthDate|出生日期|string||
|&emsp;&emsp;city|城市|string||
|&emsp;&emsp;classId|班级id|integer(int32)||
|&emsp;&emsp;className|班级名称|string||
|&emsp;&emsp;createBy|创建人|integer(int32)||
|&emsp;&emsp;createDate|创建时间|string(date-time)||
|&emsp;&emsp;currentDate|协议签署日期|string||
|&emsp;&emsp;currentSalary|目前薪资|string||
|&emsp;&emsp;currentState|当前状态：在职 待业 再读|string||
|&emsp;&emsp;education|学历|string||
|&emsp;&emsp;emergencyContact|紧急联系人|string||
|&emsp;&emsp;emergencyPhone|紧急联系人电话|string||
|&emsp;&emsp;emergencyRelation|与紧急联系人关系|string||
|&emsp;&emsp;expireTime|token 过期时间戳|integer(int64)||
|&emsp;&emsp;familyAddress|家庭地址|string||
|&emsp;&emsp;frontStage|前端阶段|string||
|&emsp;&emsp;gender|性别 0:男 1：女|string||
|&emsp;&emsp;graduation|是否毕业 0:否 1：是|string||
|&emsp;&emsp;graduationDate|毕业时间|string||
|&emsp;&emsp;guideMobile|学校导员电话|string||
|&emsp;&emsp;guideName|学校导员姓名|string||
|&emsp;&emsp;id|用户id|integer(int32)||
|&emsp;&emsp;idCard|身份证|string||
|&emsp;&emsp;major|专业|string||
|&emsp;&emsp;name|姓名|string||
|&emsp;&emsp;nickName|昵称|string||
|&emsp;&emsp;openId|小程序openid|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;province|省|string||
|&emsp;&emsp;qq|qq|string||
|&emsp;&emsp;school|就读学校|string||
|&emsp;&emsp;studyStatus|就读大几 0:大一 1:大二 2:大三 3:应届生 4:其它|string||
|&emsp;&emsp;targetObtainCity|目标就业城市|string||
|&emsp;&emsp;targetSalary|期望薪资|string||
|&emsp;&emsp;teacher|顾问老师|string||
|&emsp;&emsp;updateBy|更新人|integer(int32)||
|&emsp;&emsp;updateDate|更新时间|string(date-time)||
|&emsp;&emsp;wechat|微信号|string||
|message|响应消息|string||
|resultCode|响应码 200 成功)|integer(int32)|integer(int32)|


**响应示例**:
```javascript
{
	"data": {
		"addressInfo": "",
		"admissionCode": "",
		"authTime": "",
		"avatarUrl": "",
		"birthDate": "",
		"city": "",
		"classId": 0,
		"className": "",
		"createBy": 0,
		"createDate": "",
		"currentDate": "",
		"currentSalary": "",
		"currentState": "",
		"education": "",
		"emergencyContact": "",
		"emergencyPhone": "",
		"emergencyRelation": "",
		"expireTime": 0,
		"familyAddress": "",
		"frontStage": "",
		"gender": "",
		"graduation": "",
		"graduationDate": "",
		"guideMobile": "",
		"guideName": "",
		"id": 0,
		"idCard": "",
		"major": "",
		"name": "",
		"nickName": "",
		"openId": "",
		"phone": "",
		"province": "",
		"qq": "",
		"school": "",
		"studyStatus": "",
		"targetObtainCity": "",
		"targetSalary": "",
		"teacher": "",
		"updateBy": 0,
		"updateDate": "",
		"wechat": ""
	},
	"message": "成功",
	"resultCode": 10000
}
```


## 入学信息详情(openId)


**接口地址**:`/wechat/student/queyrinfoByOpenId/{openId}`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|openId|openId|path|true|string||
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应类«StudentInfo»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|响应数据|StudentInfo|StudentInfo|
|&emsp;&emsp;addressInfo|详细地址|string||
|&emsp;&emsp;admissionCode|入学码|string||
|&emsp;&emsp;authTime|小程序授权时间|string(date-time)||
|&emsp;&emsp;avatarUrl|头像地址|string||
|&emsp;&emsp;birthDate|出生日期|string||
|&emsp;&emsp;city|城市|string||
|&emsp;&emsp;classId|班级id|integer(int32)||
|&emsp;&emsp;className|班级名称|string||
|&emsp;&emsp;createBy|创建人|integer(int32)||
|&emsp;&emsp;createDate|创建时间|string(date-time)||
|&emsp;&emsp;currentDate|协议签署日期|string||
|&emsp;&emsp;currentSalary|目前薪资|string||
|&emsp;&emsp;currentState|当前状态：在职 待业 再读|string||
|&emsp;&emsp;education|学历|string||
|&emsp;&emsp;emergencyContact|紧急联系人|string||
|&emsp;&emsp;emergencyPhone|紧急联系人电话|string||
|&emsp;&emsp;emergencyRelation|与紧急联系人关系|string||
|&emsp;&emsp;expireTime|token 过期时间戳|integer(int64)||
|&emsp;&emsp;familyAddress|家庭地址|string||
|&emsp;&emsp;frontStage|前端阶段|string||
|&emsp;&emsp;gender|性别 0:男 1：女|string||
|&emsp;&emsp;graduation|是否毕业 0:否 1：是|string||
|&emsp;&emsp;graduationDate|毕业时间|string||
|&emsp;&emsp;guideMobile|学校导员电话|string||
|&emsp;&emsp;guideName|学校导员姓名|string||
|&emsp;&emsp;id|用户id|integer(int32)||
|&emsp;&emsp;idCard|身份证|string||
|&emsp;&emsp;major|专业|string||
|&emsp;&emsp;name|姓名|string||
|&emsp;&emsp;nickName|昵称|string||
|&emsp;&emsp;openId|小程序openid|string||
|&emsp;&emsp;phone|手机号|string||
|&emsp;&emsp;province|省|string||
|&emsp;&emsp;qq|qq|string||
|&emsp;&emsp;school|就读学校|string||
|&emsp;&emsp;studyStatus|就读大几 0:大一 1:大二 2:大三 3:应届生 4:其它|string||
|&emsp;&emsp;targetObtainCity|目标就业城市|string||
|&emsp;&emsp;targetSalary|期望薪资|string||
|&emsp;&emsp;teacher|顾问老师|string||
|&emsp;&emsp;updateBy|更新人|integer(int32)||
|&emsp;&emsp;updateDate|更新时间|string(date-time)||
|&emsp;&emsp;wechat|微信号|string||
|message|响应消息|string||
|resultCode|响应码 200 成功)|integer(int32)|integer(int32)|


**响应示例**:
```javascript
{
	"data": {
		"addressInfo": "",
		"admissionCode": "",
		"authTime": "",
		"avatarUrl": "",
		"birthDate": "",
		"city": "",
		"classId": 0,
		"className": "",
		"createBy": 0,
		"createDate": "",
		"currentDate": "",
		"currentSalary": "",
		"currentState": "",
		"education": "",
		"emergencyContact": "",
		"emergencyPhone": "",
		"emergencyRelation": "",
		"expireTime": 0,
		"familyAddress": "",
		"frontStage": "",
		"gender": "",
		"graduation": "",
		"graduationDate": "",
		"guideMobile": "",
		"guideName": "",
		"id": 0,
		"idCard": "",
		"major": "",
		"name": "",
		"nickName": "",
		"openId": "",
		"phone": "",
		"province": "",
		"qq": "",
		"school": "",
		"studyStatus": "",
		"targetObtainCity": "",
		"targetSalary": "",
		"teacher": "",
		"updateBy": 0,
		"updateDate": "",
		"wechat": ""
	},
	"message": "成功",
	"resultCode": 10000
}
```


## 入学信息填写


**接口地址**:`/wechat/student/save`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"addressInfo": "",
	"admissionCode": "",
	"authTime": "",
	"avatarUrl": "",
	"birthDate": "",
	"city": "",
	"classId": 0,
	"className": "",
	"createBy": 0,
	"createDate": "",
	"currentDate": "",
	"currentSalary": "",
	"currentState": "",
	"education": "",
	"emergencyContact": "",
	"emergencyPhone": "",
	"emergencyRelation": "",
	"expireTime": 0,
	"familyAddress": "",
	"frontStage": "",
	"gender": "",
	"graduation": "",
	"graduationDate": "",
	"guideMobile": "",
	"guideName": "",
	"id": 0,
	"idCard": "",
	"major": "",
	"name": "",
	"nickName": "",
	"openId": "",
	"phone": "",
	"province": "",
	"qq": "",
	"school": "",
	"studyStatus": "",
	"targetObtainCity": "",
	"targetSalary": "",
	"teacher": "",
	"updateBy": 0,
	"updateDate": "",
	"wechat": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|studentInfo|studentInfo|body|true|StudentInfo|StudentInfo|
|&emsp;&emsp;addressInfo|详细地址||false|string||
|&emsp;&emsp;admissionCode|入学码||true|string||
|&emsp;&emsp;authTime|小程序授权时间||false|string(date-time)||
|&emsp;&emsp;avatarUrl|头像地址||false|string||
|&emsp;&emsp;birthDate|出生日期||true|string||
|&emsp;&emsp;city|城市||true|string||
|&emsp;&emsp;classId|班级id||false|integer(int32)||
|&emsp;&emsp;className|班级名称||false|string||
|&emsp;&emsp;createBy|创建人||false|integer(int32)||
|&emsp;&emsp;createDate|创建时间||false|string(date-time)||
|&emsp;&emsp;currentDate|协议签署日期||false|string||
|&emsp;&emsp;currentSalary|目前薪资||true|string||
|&emsp;&emsp;currentState|当前状态：在职 待业 再读||true|string||
|&emsp;&emsp;education|学历||true|string||
|&emsp;&emsp;emergencyContact|紧急联系人||true|string||
|&emsp;&emsp;emergencyPhone|紧急联系人电话||true|string||
|&emsp;&emsp;emergencyRelation|与紧急联系人关系||true|string||
|&emsp;&emsp;expireTime|token 过期时间戳||false|integer(int64)||
|&emsp;&emsp;familyAddress|家庭地址||true|string||
|&emsp;&emsp;frontStage|前端阶段||true|string||
|&emsp;&emsp;gender|性别 0:男 1：女||true|string||
|&emsp;&emsp;graduation|是否毕业 0:否 1：是||true|string||
|&emsp;&emsp;graduationDate|毕业时间||true|string||
|&emsp;&emsp;guideMobile|学校导员电话||true|string||
|&emsp;&emsp;guideName|学校导员姓名||true|string||
|&emsp;&emsp;id|用户id||false|integer(int32)||
|&emsp;&emsp;idCard|身份证||true|string||
|&emsp;&emsp;major|专业||true|string||
|&emsp;&emsp;name|姓名||true|string||
|&emsp;&emsp;nickName|昵称||false|string||
|&emsp;&emsp;openId|小程序openid||true|string||
|&emsp;&emsp;phone|手机号||true|string||
|&emsp;&emsp;province|省||false|string||
|&emsp;&emsp;qq|qq||true|string||
|&emsp;&emsp;school|就读学校||true|string||
|&emsp;&emsp;studyStatus|就读大几 0:大一 1:大二 2:大三 3:应届生 4:其它||true|string||
|&emsp;&emsp;targetObtainCity|目标就业城市||true|string||
|&emsp;&emsp;targetSalary|期望薪资||true|string||
|&emsp;&emsp;teacher|顾问老师||true|string||
|&emsp;&emsp;updateBy|更新人||false|integer(int32)||
|&emsp;&emsp;updateDate|更新时间||false|string(date-time)||
|&emsp;&emsp;wechat|微信号||true|string||
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 修改入学信息


**接口地址**:`/wechat/student/update`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"addressInfo": "",
	"admissionCode": "",
	"authTime": "",
	"avatarUrl": "",
	"birthDate": "",
	"city": "",
	"classId": 0,
	"className": "",
	"createBy": 0,
	"createDate": "",
	"currentDate": "",
	"currentSalary": "",
	"currentState": "",
	"education": "",
	"emergencyContact": "",
	"emergencyPhone": "",
	"emergencyRelation": "",
	"expireTime": 0,
	"familyAddress": "",
	"frontStage": "",
	"gender": "",
	"graduation": "",
	"graduationDate": "",
	"guideMobile": "",
	"guideName": "",
	"id": 0,
	"idCard": "",
	"major": "",
	"name": "",
	"nickName": "",
	"openId": "",
	"phone": "",
	"province": "",
	"qq": "",
	"school": "",
	"studyStatus": "",
	"targetObtainCity": "",
	"targetSalary": "",
	"teacher": "",
	"updateBy": 0,
	"updateDate": "",
	"wechat": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|studentInfo|studentInfo|body|true|StudentInfo|StudentInfo|
|&emsp;&emsp;addressInfo|详细地址||false|string||
|&emsp;&emsp;admissionCode|入学码||true|string||
|&emsp;&emsp;authTime|小程序授权时间||false|string(date-time)||
|&emsp;&emsp;avatarUrl|头像地址||false|string||
|&emsp;&emsp;birthDate|出生日期||true|string||
|&emsp;&emsp;city|城市||true|string||
|&emsp;&emsp;classId|班级id||false|integer(int32)||
|&emsp;&emsp;className|班级名称||false|string||
|&emsp;&emsp;createBy|创建人||false|integer(int32)||
|&emsp;&emsp;createDate|创建时间||false|string(date-time)||
|&emsp;&emsp;currentDate|协议签署日期||false|string||
|&emsp;&emsp;currentSalary|目前薪资||true|string||
|&emsp;&emsp;currentState|当前状态：在职 待业 再读||true|string||
|&emsp;&emsp;education|学历||true|string||
|&emsp;&emsp;emergencyContact|紧急联系人||true|string||
|&emsp;&emsp;emergencyPhone|紧急联系人电话||true|string||
|&emsp;&emsp;emergencyRelation|与紧急联系人关系||true|string||
|&emsp;&emsp;expireTime|token 过期时间戳||false|integer(int64)||
|&emsp;&emsp;familyAddress|家庭地址||true|string||
|&emsp;&emsp;frontStage|前端阶段||true|string||
|&emsp;&emsp;gender|性别 0:男 1：女||true|string||
|&emsp;&emsp;graduation|是否毕业 0:否 1：是||true|string||
|&emsp;&emsp;graduationDate|毕业时间||true|string||
|&emsp;&emsp;guideMobile|学校导员电话||true|string||
|&emsp;&emsp;guideName|学校导员姓名||true|string||
|&emsp;&emsp;id|用户id||false|integer(int32)||
|&emsp;&emsp;idCard|身份证||true|string||
|&emsp;&emsp;major|专业||true|string||
|&emsp;&emsp;name|姓名||true|string||
|&emsp;&emsp;nickName|昵称||false|string||
|&emsp;&emsp;openId|小程序openid||true|string||
|&emsp;&emsp;phone|手机号||true|string||
|&emsp;&emsp;province|省||false|string||
|&emsp;&emsp;qq|qq||true|string||
|&emsp;&emsp;school|就读学校||true|string||
|&emsp;&emsp;studyStatus|就读大几 0:大一 1:大二 2:大三 3:应届生 4:其它||true|string||
|&emsp;&emsp;targetObtainCity|目标就业城市||true|string||
|&emsp;&emsp;targetSalary|期望薪资||true|string||
|&emsp;&emsp;teacher|顾问老师||true|string||
|&emsp;&emsp;updateBy|更新人||false|integer(int32)||
|&emsp;&emsp;updateDate|更新时间||false|string(date-time)||
|&emsp;&emsp;wechat|微信号||true|string||
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# 学员协议


## 查询已签署协议（当前班级）


**接口地址**:`/wechat/stuProtocol/current`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应类«学员签署协议»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|响应数据|学员签署协议|学员签署协议|
|&emsp;&emsp;classId|班级id|integer(int32)||
|&emsp;&emsp;classProtocolId|班级协议ID|string||
|&emsp;&emsp;classProtocolPath|班级协议路径|string||
|&emsp;&emsp;createBy|创建者|integer(int32)||
|&emsp;&emsp;createDate|创建时间|string(date-time)||
|&emsp;&emsp;id|签署协议id|integer(int32)||
|&emsp;&emsp;idCard|学员身份证号|string||
|&emsp;&emsp;isDetele|是否删除 0:否 1:是|boolean||
|&emsp;&emsp;protocolId|协议id|integer(int32)||
|&emsp;&emsp;protocolTite|班级协议名称|string||
|&emsp;&emsp;signNameId|学员签名id|integer(int32)||
|&emsp;&emsp;signProtocolPath|签署协议路径|string||
|&emsp;&emsp;signTime|签署时间|string(date-time)||
|&emsp;&emsp;studentId|学员id|integer(int32)||
|&emsp;&emsp;studentName|学员姓名|string||
|message|响应消息|string||
|resultCode|响应码 200 成功)|integer(int32)|integer(int32)|


**响应示例**:
```javascript
{
	"data": {
		"classId": 0,
		"classProtocolId": "",
		"classProtocolPath": "",
		"createBy": 0,
		"createDate": "",
		"id": 0,
		"idCard": "",
		"isDetele": true,
		"protocolId": 0,
		"protocolTite": "",
		"signNameId": 0,
		"signProtocolPath": "",
		"signTime": "",
		"studentId": 0,
		"studentName": ""
	},
	"message": "成功",
	"resultCode": 10000
}
```


## 查询已签署协议（按班级id查）


**接口地址**:`/wechat/stuProtocol/info/{classId}`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|classId|classId|path|true|integer(int32)||
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应类«学员签署协议»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|响应数据|学员签署协议|学员签署协议|
|&emsp;&emsp;classId|班级id|integer(int32)||
|&emsp;&emsp;classProtocolId|班级协议ID|string||
|&emsp;&emsp;classProtocolPath|班级协议路径|string||
|&emsp;&emsp;createBy|创建者|integer(int32)||
|&emsp;&emsp;createDate|创建时间|string(date-time)||
|&emsp;&emsp;id|签署协议id|integer(int32)||
|&emsp;&emsp;idCard|学员身份证号|string||
|&emsp;&emsp;isDetele|是否删除 0:否 1:是|boolean||
|&emsp;&emsp;protocolId|协议id|integer(int32)||
|&emsp;&emsp;protocolTite|班级协议名称|string||
|&emsp;&emsp;signNameId|学员签名id|integer(int32)||
|&emsp;&emsp;signProtocolPath|签署协议路径|string||
|&emsp;&emsp;signTime|签署时间|string(date-time)||
|&emsp;&emsp;studentId|学员id|integer(int32)||
|&emsp;&emsp;studentName|学员姓名|string||
|message|响应消息|string||
|resultCode|响应码 200 成功)|integer(int32)|integer(int32)|


**响应示例**:
```javascript
{
	"data": {
		"classId": 0,
		"classProtocolId": "",
		"classProtocolPath": "",
		"createBy": 0,
		"createDate": "",
		"id": 0,
		"idCard": "",
		"isDetele": true,
		"protocolId": 0,
		"protocolTite": "",
		"signNameId": 0,
		"signProtocolPath": "",
		"signTime": "",
		"studentId": 0,
		"studentName": ""
	},
	"message": "成功",
	"resultCode": 10000
}
```


## 签署班级协议


**接口地址**:`/wechat/stuProtocol/signClassProtocol`


**请求方式**:`POST`


**请求数据类型**:`multipart/form-data`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|classId|班级ID|query|true|integer(int32)||
|file|file|formData|true|file||
|protocolId|协议ID|query|true|integer(int32)||
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 签署班级协议（1）


**接口地址**:`/wechat/stuProtocol/signProtocol`


**请求方式**:`POST`


**请求数据类型**:`multipart/form-data`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|classId|班级ID|query|true|integer(int32)||
|protocolId|协议ID|query|true|integer(int32)||
|wxfile|wxfile|formData|true|file||
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


# 模拟登录


## 获取token


**接口地址**:`/wechat/test/login/`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应类|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|响应数据|object||
|message|响应消息|string||
|resultCode|响应码 200 成功)|integer(int32)|integer(int32)|


**响应示例**:
```javascript
{
	"data": {},
	"message": "成功",
	"resultCode": 10000
}
```


# 班级协议


## 查询班级协议


**接口地址**:`/wechat/protocol/info/{classId}`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|classId|classId|path|true|integer(int32)||
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应类«班级协议»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|响应数据|班级协议|班级协议|
|&emsp;&emsp;classId|班级id|integer(int32)||
|&emsp;&emsp;className|班级名称|string||
|&emsp;&emsp;createBy|创建者|integer(int32)||
|&emsp;&emsp;createDate|创建时间|string(date-time)||
|&emsp;&emsp;id|班级协议id|integer(int32)||
|&emsp;&emsp;isDelete|是否删除 0:否 1:是|boolean||
|&emsp;&emsp;protocolPath|协议路径|string||
|&emsp;&emsp;reamrk|协议描述|string||
|&emsp;&emsp;title|协议名称|string||
|&emsp;&emsp;updateBy|更新者|integer(int32)||
|&emsp;&emsp;updateDate|更新时间|string(date-time)||
|message|响应消息|string||
|resultCode|响应码 200 成功)|integer(int32)|integer(int32)|


**响应示例**:
```javascript
{
	"data": {
		"classId": 0,
		"className": "",
		"createBy": 0,
		"createDate": "",
		"id": 0,
		"isDelete": true,
		"protocolPath": "",
		"reamrk": "",
		"title": "",
		"updateBy": 0,
		"updateDate": ""
	},
	"message": "成功",
	"resultCode": 10000
}
```


# 班级管理


## 查询班级详情


**接口地址**:`/wechat/class/info/{classId}`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|classId|classId|path|true|integer(int32)||
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应类«面试题分类»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|响应数据|面试题分类|面试题分类|
|&emsp;&emsp;createBy|创建者|integer(int32)||
|&emsp;&emsp;createDate|创建时间|string(date-time)||
|&emsp;&emsp;id|试题分类id|integer(int32)||
|&emsp;&emsp;imgUrl|图片链接|string||
|&emsp;&emsp;isDelete|是否删除 0:否 1:是|boolean||
|&emsp;&emsp;pageNum|页码|integer(int32)||
|&emsp;&emsp;pageSize|行数|integer(int32)||
|&emsp;&emsp;source|来源|string||
|&emsp;&emsp;title|面试题标题|string||
|&emsp;&emsp;total|总条数|integer(int64)||
|&emsp;&emsp;type|类型|string||
|&emsp;&emsp;updateBy|更新者|integer(int32)||
|&emsp;&emsp;updateDate|更新时间|string(date-time)||
|&emsp;&emsp;userId||integer(int32)||
|message|响应消息|string||
|resultCode|响应码 200 成功)|integer(int32)|integer(int32)|


**响应示例**:
```javascript
{
	"data": {
		"createBy": 0,
		"createDate": "",
		"id": 0,
		"imgUrl": "",
		"isDelete": true,
		"pageNum": 1,
		"pageSize": 1,
		"source": "",
		"title": "",
		"total": 1,
		"type": "",
		"updateBy": 0,
		"updateDate": "",
		"userId": 0
	},
	"message": "成功",
	"resultCode": 10000
}
```


## 查询班级列表


**接口地址**:`/wechat/class/list`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"classDesc": "",
	"classImgLink": "",
	"classLike": "",
	"className": "",
	"classType": "",
	"createBy": 0,
	"createDate": "",
	"endDate": "",
	"id": 0,
	"isDelete": true,
	"pageNum": 1,
	"pageSize": 1,
	"principal": "",
	"startDate": "",
	"total": 1,
	"updateBy": 0,
	"updateDate": "",
	"userId": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|classInfo|classInfo|body|true|班级信息|班级信息|
|&emsp;&emsp;classDesc|班级描述||false|string||
|&emsp;&emsp;classImgLink|班级图片地址||false|string||
|&emsp;&emsp;classLike|班级链接||false|string||
|&emsp;&emsp;className|班级名称||false|string||
|&emsp;&emsp;classType|班级类型||false|string||
|&emsp;&emsp;createBy|创建人||false|integer(int32)||
|&emsp;&emsp;createDate|创建时间||false|string(date-time)||
|&emsp;&emsp;endDate|结束日期||false|string||
|&emsp;&emsp;id|班级id||false|integer(int32)||
|&emsp;&emsp;isDelete|是否删除 0:否 1:是||false|boolean||
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|行数||false|integer(int32)||
|&emsp;&emsp;principal|班级负责人||false|string||
|&emsp;&emsp;startDate|开始日期||false|string||
|&emsp;&emsp;total|总条数||false|integer(int64)||
|&emsp;&emsp;updateBy|更新人||false|integer(int32)||
|&emsp;&emsp;updateDate|更新时间||false|string(date-time)||
|&emsp;&emsp;userId|||false|integer(int32)||
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应类«班级信息»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|响应数据|班级信息|班级信息|
|&emsp;&emsp;classDesc|班级描述|string||
|&emsp;&emsp;classImgLink|班级图片地址|string||
|&emsp;&emsp;classLike|班级链接|string||
|&emsp;&emsp;className|班级名称|string||
|&emsp;&emsp;classType|班级类型|string||
|&emsp;&emsp;createBy|创建人|integer(int32)||
|&emsp;&emsp;createDate|创建时间|string(date-time)||
|&emsp;&emsp;endDate|结束日期|string||
|&emsp;&emsp;id|班级id|integer(int32)||
|&emsp;&emsp;isDelete|是否删除 0:否 1:是|boolean||
|&emsp;&emsp;pageNum|页码|integer(int32)||
|&emsp;&emsp;pageSize|行数|integer(int32)||
|&emsp;&emsp;principal|班级负责人|string||
|&emsp;&emsp;startDate|开始日期|string||
|&emsp;&emsp;total|总条数|integer(int64)||
|&emsp;&emsp;updateBy|更新人|integer(int32)||
|&emsp;&emsp;updateDate|更新时间|string(date-time)||
|&emsp;&emsp;userId||integer(int32)||
|message|响应消息|string||
|resultCode|响应码 200 成功)|integer(int32)|integer(int32)|


**响应示例**:
```javascript
{
	"data": {
		"classDesc": "",
		"classImgLink": "",
		"classLike": "",
		"className": "",
		"classType": "",
		"createBy": 0,
		"createDate": "",
		"endDate": "",
		"id": 0,
		"isDelete": true,
		"pageNum": 1,
		"pageSize": 1,
		"principal": "",
		"startDate": "",
		"total": 1,
		"updateBy": 0,
		"updateDate": "",
		"userId": 0
	},
	"message": "成功",
	"resultCode": 10000
}
```


# 用户授权接口


## 用户登录


**接口地址**:`/wechat/user/auth/login`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"avatar": "",
	"code": "",
	"nickName": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|loginReqParam|loginReqParam|body|true|登录请求参数|登录请求参数|
|&emsp;&emsp;avatar|小程序头像||true|string||
|&emsp;&emsp;code|小程序code||true|string||
|&emsp;&emsp;nickName|小程序昵称||true|string||
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应类«LoginResView»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|响应数据|LoginResView|LoginResView|
|&emsp;&emsp;openId|openId|string||
|&emsp;&emsp;token|token|string||
|message|响应消息|string||
|resultCode|响应码 200 成功)|integer(int32)|integer(int32)|


**响应示例**:
```javascript
{
	"data": {
		"openId": "",
		"token": ""
	},
	"message": "成功",
	"resultCode": 10000
}
```


# 面试流程


## 查询面试流程详情


**接口地址**:`/wechat/process/info/{processId}`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|processId|processId|path|true|integer(int32)||
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应类«面试流程»|
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|响应数据|面试流程|面试流程|
|&emsp;&emsp;createBy|创建者|integer(int32)||
|&emsp;&emsp;createDate|创建时间|string(date-time)||
|&emsp;&emsp;id|面试流程id|integer(int32)||
|&emsp;&emsp;interviewProcessAttrs|面试流程附件|array|面试流程附件|
|&emsp;&emsp;&emsp;&emsp;createBy|创建者||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;createDate|创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;id|面试流程附件id||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;isDelete|是否删除 0：否 1:是||false|boolean||
|&emsp;&emsp;&emsp;&emsp;objPath|面试附件路径||false|string||
|&emsp;&emsp;&emsp;&emsp;objType|面试流程附件类型 0:面试题 1:链接 2:视频||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;processId|面试流程id||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;reamrk|面试流程描述||false|string||
|&emsp;&emsp;&emsp;&emsp;title|面试流程标题||false|string||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新者||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;updateDate|更新时间||false|string(date-time)||
|&emsp;&emsp;isDelete|是否删除 0：否 1:是|boolean||
|&emsp;&emsp;pageNum|页码|integer(int32)||
|&emsp;&emsp;pageSize|行数|integer(int32)||
|&emsp;&emsp;title|面试流程标题|string||
|&emsp;&emsp;total|总条数|integer(int64)||
|&emsp;&emsp;updateBy|更新者|integer(int32)||
|&emsp;&emsp;updateDate|更新时间|string(date-time)||
|&emsp;&emsp;userId||integer(int32)||
|message|响应消息|string||
|resultCode|响应码 200 成功)|integer(int32)|integer(int32)|


**响应示例**:
```javascript
{
	"data": {
		"createBy": 0,
		"createDate": "",
		"id": 0,
		"interviewProcessAttrs": [
			{
				"createBy": 0,
				"createDate": "",
				"id": 0,
				"isDelete": true,
				"objPath": "",
				"objType": 0,
				"processId": 0,
				"reamrk": "",
				"title": "",
				"updateBy": 0,
				"updateDate": ""
			}
		],
		"isDelete": true,
		"pageNum": 1,
		"pageSize": 1,
		"title": "",
		"total": 1,
		"updateBy": 0,
		"updateDate": "",
		"userId": 0
	},
	"message": "成功",
	"resultCode": 10000
}
```


## 查询面试流程列表


**接口地址**:`/wechat/process/list`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"id": 0,
	"pageNum": 1,
	"pageSize": 1,
	"title": "",
	"total": 1,
	"userId": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|interviewProcess|interviewProcess|body|true|面试流程查询参数|面试流程查询参数|
|&emsp;&emsp;id|面试流程id||false|integer(int32)||
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|行数||false|integer(int32)||
|&emsp;&emsp;title|面试流程标题||false|string||
|&emsp;&emsp;total|总条数||false|integer(int64)||
|&emsp;&emsp;userId|||false|integer(int32)||
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应类«面试流程»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|响应数据|面试流程|面试流程|
|&emsp;&emsp;createBy|创建者|integer(int32)||
|&emsp;&emsp;createDate|创建时间|string(date-time)||
|&emsp;&emsp;id|面试流程id|integer(int32)||
|&emsp;&emsp;interviewProcessAttrs|面试流程附件|array|面试流程附件|
|&emsp;&emsp;&emsp;&emsp;createBy|创建者||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;createDate|创建时间||false|string(date-time)||
|&emsp;&emsp;&emsp;&emsp;id|面试流程附件id||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;isDelete|是否删除 0：否 1:是||false|boolean||
|&emsp;&emsp;&emsp;&emsp;objPath|面试附件路径||false|string||
|&emsp;&emsp;&emsp;&emsp;objType|面试流程附件类型 0:面试题 1:链接 2:视频||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;processId|面试流程id||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;reamrk|面试流程描述||false|string||
|&emsp;&emsp;&emsp;&emsp;title|面试流程标题||false|string||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新者||false|integer(int32)||
|&emsp;&emsp;&emsp;&emsp;updateDate|更新时间||false|string(date-time)||
|&emsp;&emsp;isDelete|是否删除 0：否 1:是|boolean||
|&emsp;&emsp;pageNum|页码|integer(int32)||
|&emsp;&emsp;pageSize|行数|integer(int32)||
|&emsp;&emsp;title|面试流程标题|string||
|&emsp;&emsp;total|总条数|integer(int64)||
|&emsp;&emsp;updateBy|更新者|integer(int32)||
|&emsp;&emsp;updateDate|更新时间|string(date-time)||
|&emsp;&emsp;userId||integer(int32)||
|message|响应消息|string||
|resultCode|响应码 200 成功)|integer(int32)|integer(int32)|


**响应示例**:
```javascript
{
	"data": {
		"createBy": 0,
		"createDate": "",
		"id": 0,
		"interviewProcessAttrs": [
			{
				"createBy": 0,
				"createDate": "",
				"id": 0,
				"isDelete": true,
				"objPath": "",
				"objType": 0,
				"processId": 0,
				"reamrk": "",
				"title": "",
				"updateBy": 0,
				"updateDate": ""
			}
		],
		"isDelete": true,
		"pageNum": 1,
		"pageSize": 1,
		"title": "",
		"total": 1,
		"updateBy": 0,
		"updateDate": "",
		"userId": 0
	},
	"message": "成功",
	"resultCode": 10000
}
```


# 面试题管理


## 查询面试题列表


**接口地址**:`/wechat/questions/list`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"answer": "",
	"content": "",
	"createBy": 0,
	"createDate": "",
	"id": 0,
	"isDelete": true,
	"pageNum": 1,
	"pageSize": 1,
	"parsing": "",
	"title": "",
	"total": 1,
	"typeId": 0,
	"updateBy": 0,
	"updateDate": "",
	"userId": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|questions|questions|body|true|面试题|面试题|
|&emsp;&emsp;answer|试题答案||false|string||
|&emsp;&emsp;content|试题内容||false|string||
|&emsp;&emsp;createBy|创建者||false|integer(int32)||
|&emsp;&emsp;createDate|创建时间||false|string(date-time)||
|&emsp;&emsp;id|试题id||false|integer(int32)||
|&emsp;&emsp;isDelete|是否删除 0:否 1:是||false|boolean||
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|行数||false|integer(int32)||
|&emsp;&emsp;parsing|试题解析||false|string||
|&emsp;&emsp;title|试题标题||false|string||
|&emsp;&emsp;total|总条数||false|integer(int64)||
|&emsp;&emsp;typeId|试题分类id||false|integer(int32)||
|&emsp;&emsp;updateBy|更新者||false|integer(int32)||
|&emsp;&emsp;updateDate|更新时间||false|string(date-time)||
|&emsp;&emsp;userId|||false|integer(int32)||
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应类«面试题分类»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|响应数据|面试题分类|面试题分类|
|&emsp;&emsp;createBy|创建者|integer(int32)||
|&emsp;&emsp;createDate|创建时间|string(date-time)||
|&emsp;&emsp;id|试题分类id|integer(int32)||
|&emsp;&emsp;imgUrl|图片链接|string||
|&emsp;&emsp;isDelete|是否删除 0:否 1:是|boolean||
|&emsp;&emsp;pageNum|页码|integer(int32)||
|&emsp;&emsp;pageSize|行数|integer(int32)||
|&emsp;&emsp;source|来源|string||
|&emsp;&emsp;title|面试题标题|string||
|&emsp;&emsp;total|总条数|integer(int64)||
|&emsp;&emsp;type|类型|string||
|&emsp;&emsp;updateBy|更新者|integer(int32)||
|&emsp;&emsp;updateDate|更新时间|string(date-time)||
|&emsp;&emsp;userId||integer(int32)||
|message|响应消息|string||
|resultCode|响应码 200 成功)|integer(int32)|integer(int32)|


**响应示例**:
```javascript
{
	"data": {
		"createBy": 0,
		"createDate": "",
		"id": 0,
		"imgUrl": "",
		"isDelete": true,
		"pageNum": 1,
		"pageSize": 1,
		"source": "",
		"title": "",
		"total": 1,
		"type": "",
		"updateBy": 0,
		"updateDate": "",
		"userId": 0
	},
	"message": "成功",
	"resultCode": 10000
}
```


## 查询面试题总数


**接口地址**:`/wechat/questions/selQuestionNum/{typeId}`


**请求方式**:`GET`


**请求数据类型**:`*`


**响应数据类型**:`*/*`


**接口描述**:


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|typeId|typeId|path|true|integer(int32)||
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


暂无


**响应示例**:
```javascript

```


## 查询面试题分类列表


**接口地址**:`/wechat/questions/typeList`


**请求方式**:`POST`


**请求数据类型**:`application/json`


**响应数据类型**:`*/*`


**接口描述**:


**请求示例**:


```javascript
{
	"createBy": 0,
	"createDate": "",
	"id": 0,
	"imgUrl": "",
	"isDelete": true,
	"pageNum": 1,
	"pageSize": 1,
	"source": "",
	"title": "",
	"total": 1,
	"type": "",
	"updateBy": 0,
	"updateDate": "",
	"userId": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | in    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|questionsType|questionsType|body|true|面试题分类|面试题分类|
|&emsp;&emsp;createBy|创建者||false|integer(int32)||
|&emsp;&emsp;createDate|创建时间||false|string(date-time)||
|&emsp;&emsp;id|试题分类id||false|integer(int32)||
|&emsp;&emsp;imgUrl|图片链接||false|string||
|&emsp;&emsp;isDelete|是否删除 0:否 1:是||false|boolean||
|&emsp;&emsp;pageNum|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|行数||false|integer(int32)||
|&emsp;&emsp;source|来源||false|string||
|&emsp;&emsp;title|面试题标题||false|string||
|&emsp;&emsp;total|总条数||false|integer(int64)||
|&emsp;&emsp;type|类型||false|string||
|&emsp;&emsp;updateBy|更新者||false|integer(int32)||
|&emsp;&emsp;updateDate|更新时间||false|string(date-time)||
|&emsp;&emsp;userId|||false|integer(int32)||
|token|token|header|false|string||


**响应状态**:


| 状态码 | 说明 | schema |
| -------- | -------- | ----- | 
|200|OK|响应类«面试题分类»|
|201|Created||
|401|Unauthorized||
|403|Forbidden||
|404|Not Found||


**响应参数**:


| 参数名称 | 参数说明 | 类型 | schema |
| -------- | -------- | ----- |----- | 
|data|响应数据|面试题分类|面试题分类|
|&emsp;&emsp;createBy|创建者|integer(int32)||
|&emsp;&emsp;createDate|创建时间|string(date-time)||
|&emsp;&emsp;id|试题分类id|integer(int32)||
|&emsp;&emsp;imgUrl|图片链接|string||
|&emsp;&emsp;isDelete|是否删除 0:否 1:是|boolean||
|&emsp;&emsp;pageNum|页码|integer(int32)||
|&emsp;&emsp;pageSize|行数|integer(int32)||
|&emsp;&emsp;source|来源|string||
|&emsp;&emsp;title|面试题标题|string||
|&emsp;&emsp;total|总条数|integer(int64)||
|&emsp;&emsp;type|类型|string||
|&emsp;&emsp;updateBy|更新者|integer(int32)||
|&emsp;&emsp;updateDate|更新时间|string(date-time)||
|&emsp;&emsp;userId||integer(int32)||
|message|响应消息|string||
|resultCode|响应码 200 成功)|integer(int32)|integer(int32)|


**响应示例**:
```javascript
{
	"data": {
		"createBy": 0,
		"createDate": "",
		"id": 0,
		"imgUrl": "",
		"isDelete": true,
		"pageNum": 1,
		"pageSize": 1,
		"source": "",
		"title": "",
		"total": 1,
		"type": "",
		"updateBy": 0,
		"updateDate": "",
		"userId": 0
	},
	"message": "成功",
	"resultCode": 10000
}
```