(function () {

    conv = {
      orderByKey: function () {
        return new IceCallback(
          function (result) {
            console.log(result);
            let orderList = [];
            if (result.length > 0) {
              for (let i = 0; i < result.length; i++) {
                let temp = result[i];

                orderList.push(
                  {
                    id: temp.id,
                    lineInfo: temp.startAddr + ' - ' + temp.destAddr,
                    goodsInfo: temp.goodsType + ',' + temp.wm,
                    vehicleRequire: temp.vlen + ',' + temp.vt,
                    fee: temp.cost,
                    time: temp.time,
                    state: temp.ostatus
                  }
                )
              }
            }
            return orderList;
          }
        )
      }
    };

    // module.exports = conv;
})();
