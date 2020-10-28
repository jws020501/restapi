 const express = require("express")
 const request = require("request")
 const app = express()
 const bodyParser = require("body-parser");
const { response } = require("express");

app.set('view engine','ejs');
app.use(express.static(__dirname + '/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 app.get("/",(req,res)=>{
     res.render("index.ejs")
 })
 app.get("/get",(req,res)=>{
    res.render("get.ejs",{
        message:null
    })
})
app.get("/post",(req,res)=>{
    res.render("post.ejs",{
        message:null
    })
})
app.get("/delete",(req,res)=>{
    res.render("delete.ejs",{
        message:null
    })
})


app.get("/wemake",(req,res)=>{
    res.render("wemake/wemake.ejs",{
        message:null
    })
})
app.get("/category",(req,res)=>{
    var api = " https://wapi-stg.wemakeprice.com/product/out/getCategory"
    var apikey = "687bb8fe6cb0fde0330b7f860862e57c94d2722d4eb2e4cba3619b6b2deaf22bf57c25225d8bb03584000fa1689556e39dc5a6992cb0de17021e9a2b5f1de402" 

    var message = null

    var opt = null

    opt = {
        method:'get',
        uri:api,
        headers: {
            apikey: apikey
          },
    }

    request(opt,(err,response,body)=>{
        if(err){
            res.render("wemake/category.ejs",{
                message:"에러"
            })
        }else if(body){
            var result = JSON.parse(body);
            console.log(result)
            res.render("wemake/category.ejs",{
                message: result
              })
        }
    })
})

app.get("/label",(req,res)=>{
    var api = " https://wapi-stg.wemakeprice.com/product/out/getLabel"
    var apikey = "687bb8fe6cb0fde0330b7f860862e57c94d2722d4eb2e4cba3619b6b2deaf22bf57c25225d8bb03584000fa1689556e39dc5a6992cb0de17021e9a2b5f1de402" 

    var opt = null

    opt = {
        method:'get',
        uri:api,
        headers: {
            apikey: apikey
          },
    }

    request(opt,(err,response,body)=>{
        if(err){
            res.render("wemake/label.ejs",{
                message:"에러"
            })
        }else if(body){
            var result = JSON.parse(body);
            console.log(result)
            res.render("wemake/label.ejs",{
                message: result
              })
        }
    })
})

app.get("/notice",(req,res)=>{
    var api = " https://wapi-stg.wemakeprice.com/product/out/getNotice"
    var apikey = "687bb8fe6cb0fde0330b7f860862e57c94d2722d4eb2e4cba3619b6b2deaf22bf57c25225d8bb03584000fa1689556e39dc5a6992cb0de17021e9a2b5f1de402" 

    var opt = null

    opt = {
        method:'get',
        uri:api,
        headers: {
            apikey: apikey
          },
    }

    request(opt,(err,response,body)=>{
        if(err){
            res.render("wemake/notice.ejs",{
                message:"에러"
            })
        }else if(body){
            var result = JSON.parse(body);
            console.log(result)
            res.render("wemake/notice.ejs",{
                message: result
              })
        }
    })
})

app.get("/notice/:value",(req,res)=>{
    var value = req.params.value

    var api = " https://wapi-stg.wemakeprice.com/product/out/getNotice "
    var apikey = "687bb8fe6cb0fde0330b7f860862e57c94d2722d4eb2e4cba3619b6b2deaf22bf57c25225d8bb03584000fa1689556e39dc5a6992cb0de17021e9a2b5f1de402" 

    var opt = null

    opt = {
        method:'get',
        uri:api,
        headers: {
            apikey: apikey
          },
    }

    request(opt,(err,response,body)=>{
        if(err){
            res.render("wemake/noticelist.ejs",{
                message:"에러"
            })
        }else if(body){
            var result = JSON.parse(body);
            console.log(result)
            res.render("wemake/noticelist.ejs",{
                value : value,
                message: result
              })
        }
    })
})

app.get("/seller",(req,res)=>{
    var api = " https://wapi-stg.wemakeprice.com/product/out/getSellerShip "
    var apikey = "687bb8fe6cb0fde0330b7f860862e57c94d2722d4eb2e4cba3619b6b2deaf22bf57c25225d8bb03584000fa1689556e39dc5a6992cb0de17021e9a2b5f1de402" 

    var opt = null

    opt = {
        method:'get',
        uri:api,
        headers: {
            apikey: apikey
          },
    }

    request(opt,(err,response,body)=>{
        if(err){
            res.render("wemake/seller.ejs",{
                message:"에러"
            })
        }else if(body){
            var result = JSON.parse(body);
            console.log(result)
            res.render("wemake/seller.ejs",{
                message: result
              })
        }
    })
})

app.get("/sellerpol1",(req,res)=>{
    var api = " https://wapi-stg.wemakeprice.com/product/out/getSellerShipPolicy "
    var apikey = "687bb8fe6cb0fde0330b7f860862e57c94d2722d4eb2e4cba3619b6b2deaf22bf57c25225d8bb03584000fa1689556e39dc5a6992cb0de17021e9a2b5f1de402" 

    var opt = null

    opt = {
        method:'get',
        uri:api,
        headers: {
            apikey: apikey
          },
    }

    request(opt,(err,response,body)=>{
        if(err){
            res.render("wemake/sellerpol1.ejs",{
                message:"에러"
            })
        }else if(body){
            var result = JSON.parse(body);
            console.log(result)
            res.render("wemake/sellerpol1.ejs",{
                message: result
              })
        }
    })
})
app.get("/sellerpol2",(req,res)=>{
    var api = " https://wapi-stg.wemakeprice.com/product/out/getSellerShipPolicy "
    var apikey = "687bb8fe6cb0fde0330b7f860862e57c94d2722d4eb2e4cba3619b6b2deaf22bf57c25225d8bb03584000fa1689556e39dc5a6992cb0de17021e9a2b5f1de402" 

    var opt = null

    opt = {
        method:'get',
        uri:api,
        headers: {
            apikey: apikey
          },
    }

    request(opt,(err,response,body)=>{
        if(err){
            res.render("wemake/sellerpol2.ejs",{
                message:"에러"
            })
        }else if(body){
            var result = JSON.parse(body);
            console.log(result)
            res.render("wemake/sellerpol2.ejs",{
                message: result
              })
        }
    })
})
app.get("/sellerpol3",(req,res)=>{
    var api = " https://wapi-stg.wemakeprice.com/product/out/getSellerShipPolicy "
    var apikey = "687bb8fe6cb0fde0330b7f860862e57c94d2722d4eb2e4cba3619b6b2deaf22bf57c25225d8bb03584000fa1689556e39dc5a6992cb0de17021e9a2b5f1de402" 

    var opt = null

    opt = {
        method:'get',
        uri:api,
        headers: {
            apikey: apikey
          },
    }

    request(opt,(err,response,body)=>{
        if(err){
            res.render("wemake/sellerpol3.ejs",{
                message:"에러"
            })
        }else if(body){
            var result = JSON.parse(body);
            console.log(result)
            res.render("wemake/sellerpol3.ejs",{
                message: result
              })
        }
    })
})

app.get("/product",(req,res)=>{
    res.render("wemake/product.ejs",{
      message:null  
    })
})


app.post("/get",(req,res)=>{

    var api = req.body.apilink;

    var apikey = null

    apikey = req.body.apikey

    var opt = null
    opt = {
        method:'get',
        uri:api,
        headers: {
            apikey: apikey
          },
    }
    request(opt,(err,response,body)=>{
        if(err){
            res.render("get.ejs",{
                message:"에러"
            })
        }else if(body){
            var result = JSON.stringify(JSON.parse(body));
            console.log(result)
            res.render("get.ejs",{
                message:result
            })
        }
    })
})
app.post("/post",(req,res)=>{
    var apikey = null
    var opt = null
    var opt2 = null
    
    var api = req.body.apilink;
    var apikey = req.body.apikey
    var query = req.body.query
    var asd = JSON.parse(query)


    console.log(asd)
    opt = {
        method:'post',
        uri:api,
        form:asd,
        json:true,
        headers: {
            apikey: apikey
          },
    }
    request.post(opt,(err,response,body)=>{
        console.log("성공")
    })

    opt2 = {
        method:'get',
        uri:api,
        headers: {
            apikey: apikey
          },
    }
    request(opt2,(err,response,body)=>{
        if(err){
            res.render("get.ejs",{
                message:"에러"
            })
        }else if(body){
            var result = JSON.stringify(JSON.parse(body));
            console.log(result)
            res.render("get.ejs",{
                message:result
            })
        }
    })

})
app.post("/delete",(req,res)=>{
    var apikey = null
    var opt = null
    var opt2 = null
    var api = req.body.apilink;
    var query_id = new Number;
    query_id = req.body.query_id;

   opt = {
        method:'delete',
        uri:api+"/"+query_id,
        headers: {
            apikey: apikey
          },
        // form:{ id : query_id },
        // json:true
    }
    request.delete(opt,(err,response,body)=>{
        console.log(body)
    })

    opt2 = {
        method:'get',
        uri:api,
        headers: {
            apikey: apikey
          }
    }
    request(opt2,(err,response,body)=>{
        if(err){
            res.render("get.ejs",{
                message:"에러"
            })
        }else if(body){
            var result = JSON.stringify(JSON.parse(body));
            console.log(result)
            res.render("get.ejs",{
                message:result
            })
        }
    })

})



app.get("/popup/basic",(req,res)=>{
    res.render("wemake/popup/basic.ejs")
})
app.get("/popup/sale",(req,res)=>{
    res.render("wemake/popup/sale.ejs")
})
app.get("/popup/detail",(req,res)=>{
    res.render("wemake/popup/detail.ejs")
})
app.get("/popup/option",(req,res)=>{
    res.render("wemake/popup/option.ejs")
})
app.get("/popup/noticeList",(req,res)=>{
    res.render("wemake/popup/noticeList.ejs")
})
app.get("/popup/etc",(req,res)=>{
    res.render("wemake/popup/etc.ejs")
})
app.get("/popup/branchList",(req,res)=>{
    res.render("wemake/popup/branchList.ejs")
})
app.get("/popup/basicship",(req,res)=>{
    res.render("wemake/popup/basicship")
})


app.post("/product",(req,res)=>{
    var api = " https://wapi-stg.wemakeprice.com/product/out/getSellerShipPolicy "
    var apikey = "687bb8fe6cb0fde0330b7f860862e57c94d2722d4eb2e4cba3619b6b2deaf22bf57c25225d8bb03584000fa1689556e39dc5a6992cb0de17021e9a2b5f1de402" 


    var productNo =req.body.productNo

    let opt = {
        method:'post',
        uri:api,
        headers: {
            apikey: apikey
          },
        body:{
            productInfo:{
                productNo:productNo,
                basic: {
                    productName : productName,
                    productType : productType,
                    dcateCode : dcateCode,
                    shipPolicyNo : shipPolicyNo,
                     shipInfo : {
                        claimShipFee : claimShipFee,
                        releaseZipCode : releaseZipCode,
                        releaseRoadAddress1 : releaseRoadAddress1,
                        releaseRoadAddress2 : releaseRoadAddress2, 
                        releaseAddress1 : releaseAddress1, 
                        releaseAddress2 : releaseAddress2, 
                        returnZipCode : returnZipCode, 
                        returnRoadAddress1 : returnRoadAddress1, 
                        returnRoadAddress2 : returnRoadAddress2, 
                        returnAddress1 : returnAddress1,
                        returnAddress2 : returnAddress1, 
                        releaseDay : releaseDay,
                        releaseTime : releaseTime,
                        holidayExceptYn : holidayExceptYn
                        },
                        adultLimitYn : adultLimitYn,
                        displayYn : displayYn, 
                        bizYn : bizYn, 
                        brandNo : brandNo,
                        makerNo : makerNo
                },
                sale : {
                    salePeriod : salePeriod,
                    saleStartDate : saleStartDate,
                    saleEndDate : saleEndDate,
                    originPrice : originPrice,
                    salePrice : salePrice,
                    stockCount : stockCount,
                    taxYn : taxYn,
                    purchaseMinCount : purchaseMinCount, 
                    purchaseLimitYn : purchaseLimitYn,
                    purchaseLimitDuration : purchaseLimitDuration,
                    purchaseLimitDay: purchaseLimitDay, 
                    purchaseLimitCount : purchaseLimitCount,
                    basketLimitYn : basketLimitYn,
                    referencePriceType : referencePriceType
                },
                detail : {
                    basicImgUrl : basicImgUrl,
                    addImgUrlList : [ addImgUrlList ],
                    listImgUrl : listImgUrl,
                    descType : descType,
                    descImgUrlList : [ descImgUrlList ],
                    descHtml : descHtml
                },
                option : {
                    selectOptionUseYn : selectOptionUseYn, 
                    selectOptionDepth : selectOptionDepth, 
                    selectOptionTitle1 : selectOptionTitle1, 
                    selectOptionTitle2 : selectOptionTitle2, 
                    selectOptionTitle3 : selectOptionTitle3, 
                    selectOptionTitle4 : selectOptionTitle4, 
                    selectOptionTitle5 : selectOptionTitle5, 
                    selectOptionValueList : [{ 
                        optionValue1 : optionValue1, 
                        optionValue2 : optionValue2, 
                        optionValue3 : optionValue3, 
                        optionValue4 : optionValue4, 
                        optionValue5 : optionValue5, 
                        stockCount : stockCount,
                        displayYn : displayYn, 
                        sellerOptionCode : sellerOptionCode
                        }],
                    textOptionUseYn : textOptionUseYn, 
                    textOptionDepth : textOptionDepth,
                    textOptionTitle1 : textOptionTitle1, 
                    textOptionTitle2 : textOptionTitle2
                },
                noticeList : [{
                    productGroupNoticeNo : productGroupNoticeNo, 
                    groupNoticeNo : groupNoticeNo, 
                    noticeList : [{
                    noticeNo : noticeNo,
                    description : description }]
                }],
                etc : {
                    parallelImportYn : parallelImportYn, 
                    parallelImportUrl : parallelImportUrl, 
                    kcKidIsCertification : kcKidIsCertification, 
                    kcKidCertificationList : [{
                        certificationType : certificationType,
                        certificationNo : certificationNo }],
                    kcLifeIsCertification : kcLifeIsCertification, 
                    kcLifeCertificationList : [{
                        certificationType : certificationType,
                        certificationNo : certificationNo }],
                    kcElectricIsCertification : kcLifeIsCertification,
                    kcElectricCertificationList : [{
                        certificationType : certificationType,
                        certificationNo : certificationNo }],
                    kcReportIsCertification : kcLifeIsCertification, 
                    kcReportCertificationList : [{
                        certificationType : certificationType,
                        certificationNo : certificationNo }],
                    kcLifeChemistryIsCertification : kcLifeChemistryIsCertification, 
                    kcLifeChemistryCertificationList : [{
                        certificationType : certificationType,
                        certificationNo : certificationNo }],
                    sellerProdCode: sellerProdCode, 
                    priceComparisonSiteYn : priceComparisonSiteYn, 
                    keywordPriceComparisonSite : keywordPriceComparisonSite, 
                    keywordWemakeprice : keywordWemakeprice,
                    isbn13 : isbn13,
                    isbn10 : isbn10, 
                    displayOnlyDealYn : displayOnlyDealYn, 
                    reviewDisp : reviewDisp, 
                    labelNoList : [ labelNoList ]
                },
                branchList : [{ 
                    branchId : branchId, 
                    originPrice : originPrice, 
                    salePrice : salePrice, 
                    useYn : useYn
                }]
            }

            }
        }
        request.post(opt,(err,response,body)=>{
            if(err){
                console.log(err)
                res.render("wemake/wemake.ejs",{
                    message:"에러"
                })
            }else if(body){
                var result = JSON.stringify(JSON.parse(body));
                console.log(result)
                res.render("wemake/wemake.ejs",{
                    message:"상품이 등록되었습니다"
                })
            }
        })

        
    })



var port = 3000
app.listen(port,function(){
    console.log("서버열림")
})