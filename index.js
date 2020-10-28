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

// basic
var productName = null
var productType = null
var dcateCode = null
var shipPolicyNo = null
var adultLimitYn = null
var displayYn = null
var bizYn = null
var brandNo = null
var makerNo = null

//basicship
var claimShipFee = null
var releaseZipCode = null
var releaseRoadAddress1 = null
var releaseRoadAddress2 = null
var releaseAddress1 = null
var releaseAddress2 = null
var returnZipCode = null
var returnRoadAddress1 = null
var returnRoadAddress2 = null
var returnAddress1 = null
var returnAddress2 = null
var releaseDay = null
var releaseTime = null
var holidayExceptYn = null

//sale
var salePeriod = null
var saleStartDate = null
var saleEndDate = null
var originPrice = null
var salePrice = null
var stockCount = null
var taxYn = null
var purchaseMinCount = null
var purchaseLimitYn = null
var purchaseLimitDuration = null
var purchaseLimitDay = null
var purchaseLimitCount = null
var basketLimitYn = null
var referencePriceType = null

//detail
var basicImgUrl = null
var addImgUrlList = null
var listImgUrl = null
var descType = null
var descImgUrlList = null
var descHtml = null


app.get("/wemake",(req,res)=>{
    // basic
        productName = null
        productType = null
        dcateCode = null
        shipPolicyNo = null
        adultLimitYn = null
        displayYn = null
        bizYn = null
        brandNo = null
        makerNo = null
    
    //basicship
        claimShipFee = null
        releaseZipCode = null
        releaseRoadAddress1 = null
        releaseRoadAddress2 = null
        releaseAddress1 = null
        releaseAddress2 = null
        returnZipCode = null
        returnRoadAddress1 = null
        returnRoadAddress2 = null
        returnAddress1 = null
        returnAddress2 = null
        releaseDay = null
        releaseTime = null
        holidayExceptYn = null
    
    //sale
        salePeriod = null
        saleStartDate = null
        saleEndDate = null
        originPrice = null
        salePrice = null
        stockCount = null
        taxYn = null
        purchaseMinCount = null
        purchaseLimitYn = null
        purchaseLimitDuration = null
        purchaseLimitDay = null
        purchaseLimitCount = null
        basketLimitYn = null
        referencePriceType = null
    
    //detail
        basicImgUrl = null
        addImgUrlList = null
        listImgUrl = null
        descType = null
        descImgUrlList = null
        descHtml = null
    
        res.render("wemake/wemake.ejs",{
            message:null
        })
    })

app.get("/popup/basic",(req,res)=>{
    res.render("wemake/popup/basic.ejs")
})

app.post("/popup/basic",(req,res)=>{
    productName = req.body.productName
    productType = req.body.productType
    dcateCode = req.body.dcateCode
    shipPolicyNo = req.body.shipPolicyNo
    adultLimitYn = req.body.adultLimitYn
    displayYn = req.body.displayYn
    bizYn = req.body.bizYn
    brandNo = req.body.brandNo
    makerNo = req.body.makerNo

})

app.get("/popup/basicship",(req,res)=>{
    res.render("wemake/popup/basicship")
})

app.post("/popup/basicship",(req,res)=>{
    claimShipFee = req.body.claimShipFee
    releaseZipCode = req.body.releaseZipCode
    releaseRoadAddress1 = req.body.returnRoadAddress1
    releaseRoadAddress2 = req.body.returnRoadAddress2
    releaseAddress1 = req.body.releaseAddress1
    releaseAddress2 = req.body.releaseAddress2
    returnZipCode = req.body.returnZipCode
    returnRoadAddress1 = req.body.returnRoadAddress1
    returnRoadAddress2 = req.body.returnRoadAddress2
    returnAddress1 = req.body.returnAddress1
    returnAddress2 = req.body.returnAddress2
    releaseDay = req.body.releaseDay
    releaseTime = req.body.releaseTime
    holidayExceptYn = req.body.holidayExceptYn
})

app.get("/popup/sale",(req,res)=>{
    res.render("wemake/popup/sale.ejs")
})

app.post("/popup/sale",(req,res)=>{
    salePeriod = req.body.salePeriod
    saleStartDate = req.body.saleStartDate
    saleEndDate = req.body.saleEndDate
    originPrice = req.body.originPrice
    salePrice = req.body.salePrice
    stockCount = req.body.stockCount
    taxYn = req.body.taxYn
    purchaseMinCount = req.body.purchaseMinCount
    purchaseLimitYn = req.body.purchaseLimitYn
    purchaseLimitDuration = req.body.purchaseLimitDuration
    purchaseLimitDay = req.body.purchaseLimitDay
    purchaseLimitCount = req.body.purchaseLimitCount
    basketLimitYn = req.body.basketLimitYn
    referencePriceType = req.body.referencePriceType
})

app.get("/popup/detail",(req,res)=>{
    res.render("wemake/popup/detail.ejs")
})
app.post("/popup/detail",(req,res)=>{
    basicImgUrl = req.body.basicImgUrl
    addImgUrlList = req.body.addImgUrlList
    listImgUrl = req.body.listImgUrl
    descType = req.body.descType
    descImgUrlList = req.body.descImgUrlList
    descHtml = req.body.descHtml
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
                        returnAddress2 : returnAddress2, 
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
                    mdName:mdName,
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