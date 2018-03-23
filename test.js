'use strict'

var soap = require('soap-server');
module.exports= ()=> {
    //QueueingEvaluation************************************
    function dataResult1 () {
    };
    dataResult1.prototype.PDH     = 'A001';
    dataResult1.prototype.YWLX    = 'A';
    dataResult1.prototype.YWMC    = '';
    dataResult1.prototype.QHSJ    = new Date();
    dataResult1.prototype.HJSJ    = new Date();
    dataResult1.prototype.HJCS    = '';
    dataResult1.prototype.KSBLSJ  = new Date();
    dataResult1.prototype.JSBLSJ  = new Date();
    dataResult1.prototype.PJFS    = '';
    dataResult1.prototype.FWWDBH  = '';
    dataResult1.prototype.FWCKBH  = '';
    dataResult1.prototype.YYYBH   = '';
    dataResult1.prototype.ZT      = '';

    function QueueingEvaluationResponseType () {
    };
    QueueingEvaluationResponseType.prototype.replyCode  = 'OK',
    QueueingEvaluationResponseType.prototype.dataResult = dataResult1;
    //QueueingEvaluation************************************

    function QueueingEvaluationInputType() {}
    QueueingEvaluationInputType.prototype.kssj = '';
    QueueingEvaluationInputType.prototype.jssj = '';


    function dataResult2 () {};
    dataResult2.prototype.FWWDBH    = '';
    dataResult2.prototype.HQSJ      = new Date();
    dataResult2.prototype.DQQHZS    = '';
    dataResult2.prototype.DQDDRS    = '';
    dataResult2.prototype.DQYBLRS   = '';
    dataResult2.prototype.DQZZBLRS  = '';
    function QueueingAnalysisResponseType () {};
    QueueingAnalysisResponseType.prototype.replyCode = 'OK';
    QueueingAnalysisResponseType.prototype.dataResult= dataResult2;
    function QueueingAnalysisInputType() {};
    QueueingAnalysisInputType.prototype.kssj = '';
    QueueingAnalysisInputType.prototype.jssj = '';

    function QueueingEvaluation() {};

    let QueueingEvaluationResDate = [{
        PDH       : 'A001',
        YWLX      : 'A',
        YWMC      : '新增',
        QHSJ      : new Date().toUTCString(),
        HJSJ      : "2017-12-21T16:00:00.000Z",
        HJCS      : '1',
        KSBLSJ    : "2017-12-21T16:00:00.000Z",
        JSBLSJ    : "2017-12-21T16:00:00.000Z",
        PJFS      : '5',
        FWWDBH    : 'GZTHTH',
        FWCKBH    : '0001',
        YYYBH     : '0002',
        ZT        : '3'
    },
    {
        PDH       : 'A002',
        YWLX      : 'A',
        YWMC      : '新增',
        QHSJ      : "2017-12-21T16:00:00.000Z",
        HJSJ      : "2017-12-21T16:00:00.000Z",
        HJCS      : '1',
        KSBLSJ    : "2017-12-21T16:00:00.000Z",
        JSBLSJ    : "2017-12-21T16:00:00.000Z",
        PJFS      : '5',
        FWWDBH    : 'GZTHTH',
        FWCKBH    : '0001',
        YYYBH     : '0002',
        ZT        : '3'
    },
    {
        PDH       : 'A001',
        YWLX      : 'A',
        YWMC      : '新增',
        QHSJ      : "2017-12-21T16:00:00.000Z",
        HJSJ      : "2017-12-21T16:00:00.000Z",
        HJCS      : '1',
        KSBLSJ    : "2017-12-21T16:00:00.000Z",
        JSBLSJ    : "2017-12-21T16:00:00.000Z",
        PJFS      : '5',
        FWWDBH    : 'GZLWLW',
        FWCKBH    : '0001',
        YYYBH     : '0002',
        ZT        : '3'
    }]; 

    //******************************************************************** */
    QueueingEvaluation.prototype.QueueingEvaluation = function(kssj, jssj) {
        var ret = new QueueingEvaluationResponseType();
        ret.replyCode  = 'OK';
        ret.dataResult = QueueingEvaluationResDate;
        return ret;
    };

    function QueueingAnalysis () {};

    QueueingAnalysis.prototype.QueueingAnalysis = function(kssj, jssj) {
        var ret = new QueueingAnalysisResponseType();
        ret.replyCode  = 'OK';
        ret.dataResult = [
            {
                FWWDBH: 'GZLWLW',
                HQSJ: '2017-12-21T16:00:00.000Z',
                DQQHZS: '20',
                DQDDRS: '5',
                DQYBLRS: '9',
                DQZZBLRS: '6'
            },
            {
                FWWDBH: 'GZLWLW',
                HQSJ: '2017-12-21T16:00:00.000Z',
                DQQHZS: '20',
                DQDDRS: '5',
                DQYBLRS: '9',
                DQZZBLRS: '6'
            }
        ];
        return ret;
    };

    var soapServiceQueueingEvaluation = soapServer.addService('QueueingEvaluation', new QueueingEvaluation());


    var QueueingEvaluationOperation = soapServiceQueueingEvaluation.getOperation('QueueingEvaluation');
    QueueingEvaluationOperation.setOutputType(QueueingEvaluationResponseType,'QueueingEvaluationResponseType');
    QueueingEvaluationOperation.setInputType('QueueingEvaluationInputType',QueueingEvaluationInputType);

    var soapServiceQueueingAnalysis = soapServer.addService('QueueingAnalysis', new QueueingAnalysis());
    var QueueingAnalysisOperation = soapServiceQueueingAnalysis.getOperation('QueueingAnalysis');
    QueueingAnalysisOperation.setOutputType(QueueingAnalysisResponseType,'QueueingAnalysisResponseType');
    QueueingAnalysisOperation.setInputType('QueueingAnalysisInputType',QueueingAnalysisInputType);

}