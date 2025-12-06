/**
 * Business Rule: Save SelectAssets to Transfer Order Line
 * Table: Transfer Order [alm_transfer_order]
 * When: after
 * Insert: true
 * Active: true
 * Application: Global
 * Description: Creates transfer order line records from selected assets
 * Exported: 2025-12-05
 */

(function executeRule(current, previous /*null when async*/ ) {

//    gs.info("Testing 1: " + current.u_mvrs);
    var mvrsObj = JSON.parse(current.u_mvrs);
//    gs.info("Testing 2: " + mvrsObj.length);
    for (var i = 0; i < mvrsObj.length; i++) {
        var transferOrderLineRec = new GlideRecord('alm_transfer_order_line');
        transferOrderLineRec.initialize();
        transferOrderLineRec.asset = mvrsObj[i].asset;
        transferOrderLineRec.model = mvrsObj[i].model;
		transferOrderLineRec.quantity_requested=mvrsObj[i].quantity;

//        transferOrderLineRec.from_to_stockroom = current.variables.from_school;
//        transferOrderLineRec.to_stockroom = current.variables.to_school;
        transferOrderLineRec.transfer_order = current.sys_id;

        transferOrderLineRec.insert();

    }

})(current, previous);
