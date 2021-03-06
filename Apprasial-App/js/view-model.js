//Mapping Way
var data = {
	subjectPropertyAddress: '',//Normal TextArea or input type="text" or date example -- subjectPropertyAddress: '123 Address'
	subjectStateSelected: ['Select'],//Normal dropdown example -- subjectStateSelected: ['CT']
	subjectCity: '',
	subjectZip: '',
	subjectCounty: '',
	subjectBorrower: '',
	subjectOwnerOfPublicRecord: '',
	subjectLegalDescription: '',
	subjectAssessorsParcel: '',
	subjectTaxYearSelected: ['Select'],
	subjectReTaxes: '',
	subjectNeighborhoodName: '',
	subjectMapReference: '',
	subjectCensusTract: '',
	subjectOccupantSelected: ['Select'],
	subjectSpecialAssessments: '',
	subjectPudHoa: '',
	subjectPudHoaFrequencySelected: ['Select'],
	subjectPropertyRightsAppraisedSelected: ['Select'],
	subjectPropertyRightsAppraisedOther: '',
	subjectAssignmentTypeSelected: ['Select'],
	subjectAssignmentTypeOther: '',
	subjectLenderClient: '',
	subjectAddress: '',
	subjectCurrentlyOfferedSelected: ['Select'],
	subjectDataSourceOfferedPrice: '',
	
	contractAnalyzeContractChecked: '',
	contractPrice: '',
	contractDate: '',//Date example -- contractDate: '2013-11-21'
	contractPropertySellerChecked: '',
	contractDataSources: '',
	contractFinancialAssistanceChecked: '',
	contractFinancialAssistanceYes: '',
	
	neighborhoodLocationSelected: '',
	neighborhoodBuiltUpSelected: '',
	neighborhoodGrowthSelected: '',
	neighborhoodPropertyValuesSelected: '',
	neighborhoodDemandSupplySelected: '',
	neighborhoodMarketingSelected: '',
	neighborhoodPrice: '',
	neighborhoodAge: '',
	neighborhoodPriceSelected: '',
	neighborhoodOneUnit: '',
	neighborhoodTwoToFour: '',
	neighborhoodMultiFamily: '',
	neighborhoodCommercial: '',
	neighborhoodOther: '',
	neighborhoodDescription: '',
	neighborhoodConditions: '',
	
	siteDimensions: '',
	siteArea: '',
	siteShape: '',
	siteView: '',
	siteZoning: '',
	siteZoningDescription: '',
	siteZoningComplianceSelected: '',
	siteZoningComplianceOther: '',
	sitePropertyImprovedSelected: '',
	sitePropertyImprovedOther: '',
	siteElectricitySelected: '',
	siteGasSelected: '',
	siteWaterSelected: '',
	siteSanitarySewerSelected: '',
	siteStreetSelected: '',
	siteAlleySelected: '',
	siteFloodHazardSelected: '',
	siteFemaFloodZone: '',
	siteFemaMap: '',
	siteFemaMapDate: '',
	siteTypicalSelected: '',
	siteTypicalSelectedNo: '',
	siteAdverseSelected: '',
	siteAdverseSelectedOther: '',

	improvementsUnitsSelected: ['Select'],
	improvementsNumOfStories: '',
	improvementsTypeSelected: ['Select'],
	improvementsDesignStyle: '',
	improvementsYearBuilt: '',
	improvementsEffectiveAgeYears: '',
	improvementsFoundationChecked: '',//Radio Button Example -- improvementsFoundationChecked: 'Something' (In the radio group, "Something" is selected)
	improvementsBasementArea: '',
	improvementsBasementFinish: '',
	improvementsSumpPumpChecked: [],//Checkbox Example -- improvementsSumpPumpChecked: ['Something1','Something3'] (In the checkbox group, 1 and 3 are selected)
	improvementsEvidenceOfSelected: ['Select'],
	improvementsFoundationWalls: '',
	improvementsExteriorWalls: '',
	improvementsRoofSurface: '',
	improvementsGuttersAndDownspouts: '',
	improvementsWindowType: '',
	improvementsStormSash: '',
	improvementsScreens: '',
	improvementsFloors: '',
	improvementsWalls: '',
	improvementsTrimFinish: '',
	improvementsBathFloor: '',
	improvementsBathWainscot: '',
	improvementsAtticSelected: ['Select'],
	improvementsHeatingSelected: ['Select'],
	improvementsFuel: '',
	improvementsCoolingSelected: ['Select'],
	improvementsAmenitiesSelected: ['Select'],
	improvementsCarStorageSelected: ['Select'],
	improvementsNumCars: '',
	improvementsDrivewaySurfaceSelected: ['Select'],
	improvementsAppliancesChecked:[],
	improvementsAppliancesOther: '',
	improvementsRooms: '',
	improvementsBedrooms: '',
	improvementsBaths: '',
	improvementsSqFtGrossLivingArea: '',
	improvementsAdditionalFeatures: '',
	improvementsPropertyCondition: '',
	improvementsPhysicalDeficienciesSelected: ['Select'],
	improvementsPhysicalDeficienciesOther: '',
	improvementsConformToNeighborhoodSelected: ['Select'],
	improvementsConformToNeighborhoodOther: '',
	
	scaComparableCount: '',
	scaComparableFromPrice: '',
	scaComparableToPrice: '',
	scaComparableSaleCount: '',
	scaComparableSaleFromPrice: '',
	scaComparableSaleToPrice: '',
	//Subject
	scaSubjectAddress: '',
	scaSubjectSalePrice: '',
	scaSubjectGrossPrice: '',
	scaSubjectLocation: '',
	scaSubjectLeasehold: '',
	scaSubjectSite: '',
	scaSubjectView: '',
	scaSubjectDesignStyle: '',
	scaSubjectQualityOfConstruction: '',
	scaSubjectActualAge: '',
	scaSubjectCondition: '',
	scaSubjectTotalRooms: '',
	scaSubjectBedrooms: '',
	scaSubjectBaths: '',
	scaSubjectGrossLivingArea: '',
	scaSubjectRoomsBelowGrade: '',
	scaSubjectFunctionalUtility: '',
	scaSubjectHeatingCooling: '',
	scaSubjectEnergyEfficientItems: '',
	scaSubjectGarageCarport: '',
	scaSubjectGarageCarport: '',
	scaSubjectPorch: '',
	//Comparable 1
	scaCompOneAddress: '',
	scaCompOneProximity: '',
	scaCompOneSalePrice: '',
	scaCompOneGrossPrice: '',
	scaCompOneDataSources: '',
	scaCompOneVerificationSources: '',
	scaCompOneConcessions: '',
	scaCompOneConcessionsAdjustment: '',
	scaCompOneDateOfSale: '',
	scaCompOneDateOfSaleAdjustment: '',
	scaCompOneLocation: '',
	scaCompOneLocationAdjustment: '',
	scaCompOneLeasehold: '',
	scaCompOneLeaseholdAdjustment: '',
	scaCompOneSite: '',
	scaCompOneSiteAdjustment: '',
	scaCompOneView: '',
	scaCompOneViewAdjustment: '',
	scaCompOneDesignStyle: '',
	scaCompOneDesignStyleAdjustment: '',
	scaCompOneQuality: '',
	scaCompOneQualityAdjustment: '',
	scaCompOneActualAge: '',
	scaCompOneActualAgeAdjustment: '',
	scaCompOneCondition: '',
	scaCompOneConditionAdjustment: '',
	scaCompOneTotalRooms: '',
	scaCompOneBedrooms: '',
	scaCompOneBaths: '',
	scaCompOneGrossLivingArea: '',
	scaCompOneGrossLivingAreaAdjustment: '',
	scaCompOneRoomsBelowGrade: '',
	scaCompOneRoomsBelowGradeAdjustment: '',
	scaCompOneFunctionalUtility: '',
	scaCompOneFunctionalUtilityAdjustment: '',
	scaCompOneHeatingCooling: '',
	scaCompOneHeatingCoolingAdjustment: '',
	scaCompOneEnergyItems: '',
	scaCompOneEnergyItemsAdjustment: '',
	scaCompOneGarage: '',
	scaCompOneGarageAdjustment: '',
	scaCompOnePorch: '',
	scaCompOnePorchAdjustment: '',
	scaCompOneNetAdjustmentChecked: '',
	scaCompOneNetAdjustment: '',
	scaCompOneNetAdjustmentPercent: '',
	scaCompOneGrossAdjustmentPercent: '',
	scaCompOneDollarAdjustment: '',
	//Comparable 2
	scaCompTwoAddress: '',
	scaCompTwoProximity: '',
	scaCompTwoSalePrice: '',
	scaCompTwoGrossPrice: '',
	scaCompTwoDataSources: '',
	scaCompTwoVerificationSources: '',
	scaCompTwoConcessions: '',
	scaCompTwoConcessionsAdjustment: '',
	scaCompTwoDateOfSale: '',
	scaCompTwoDateOfSaleAdjustment: '',
	scaCompTwoLocation: '',
	scaCompTwoLocationAdjustment: '',
	scaCompTwoLeasehold: '',
	scaCompTwoLeaseholdAdjustment: '',
	scaCompTwoSite: '',
	scaCompTwoSiteAdjustment: '',
	scaCompTwoView: '',
	scaCompTwoViewAdjustment: '',
	scaCompTwoDesignStyle: '',
	scaCompTwoDesignStyleAdjustment: '',
	scaCompTwoQuality: '',
	scaCompTwoQualityAdjustment: '',
	scaCompTwoActualAge: '',
	scaCompTwoActualAgeAdjustment: '',
	scaCompTwoCondition: '',
	scaCompTwoConditionAdjustment: '',
	scaCompTwoTotalRooms: '',
	scaCompTwoBedrooms: '',
	scaCompTwoBaths: '',
	scaCompTwoGrossLivingArea: '',
	scaCompTwoGrossLivingAreaAdjustment: '',
	scaCompTwoRoomsBelowGrade: '',
	scaCompTwoRoomsBelowGradeAdjustment: '',
	scaCompTwoFunctionalUtility: '',
	scaCompTwoFunctionalUtilityAdjustment: '',
	scaCompTwoHeatingCooling: '',
	scaCompTwoHeatingCoolingAdjustment: '',
	scaCompTwoEnergyItems: '',
	scaCompTwoEnergyItemsAdjustment: '',
	scaCompTwoGarage: '',
	scaCompTwoGarageAdjustment: '',
	scaCompTwoPorch: '',
	scaCompTwoPorchAdjustment: '',
	scaCompTwoNetAdjustmentChecked: '',
	scaCompTwoNetAdjustment: '',
	scaCompTwoNetAdjustmentPercent: '',
	scaCompTwoGrossAdjustmentPercent: '',
	scaCompTwoDollarAdjustment: '',
	//Comparable 3
	scaCompThreeAddress: '',
	scaCompThreeProximity: '',
	scaCompThreeSalePrice: '',
	scaCompThreeGrossPrice: '',
	scaCompThreeDataSources: '',
	scaCompThreeVerificationSources: '',
	scaCompThreeConcessions: '',
	scaCompThreeConcessionsAdjustment: '',
	scaCompThreeDateOfSale: '',
	scaCompThreeDateOfSaleAdjustment: '',
	scaCompThreeLocation: '',
	scaCompThreeLocationAdjustment: '',
	scaCompThreeLeasehold: '',
	scaCompThreeLeaseholdAdjustment: '',
	scaCompThreeSite: '',
	scaCompThreeSiteAdjustment: '',
	scaCompThreeView: '',
	scaCompThreeViewAdjustment: '',
	scaCompThreeDesignStyle: '',
	scaCompThreeDesignStyleAdjustment: '',
	scaCompThreeQuality: '',
	scaCompThreeQualityAdjustment: '',
	scaCompThreeActualAge: '',
	scaCompThreeActualAgeAdjustment: '',
	scaCompThreeCondition: '',
	scaCompThreeConditionAdjustment: '',
	scaCompThreeTotalRooms: '',
	scaCompThreeBedrooms: '',
	scaCompThreeBaths: '',
	scaCompThreeGrossLivingArea: '',
	scaCompThreeGrossLivingAreaAdjustment: '',
	scaCompThreeRoomsBelowGrade: '',
	scaCompThreeRoomsBelowGradeAdjustment: '',
	scaCompThreeFunctionalUtility: '',
	scaCompThreeFunctionalUtilityAdjustment: '',
	scaCompThreeHeatingCooling: '',
	scaCompThreeHeatingCoolingAdjustment: '',
	scaCompThreeEnergyItems: '',
	scaCompThreeEnergyItemsAdjustment: '',
	scaCompThreeGarage: '',
	scaCompThreeGarageAdjustment: '',
	scaCompThreePorch: '',
	scaCompThreePorchAdjustment: '',
	scaCompThreeNetAdjustmentChecked: '',
	scaCompThreeNetAdjustment: '',
	scaCompThreeNetAdjustmentPercent: '',
	scaCompThreeGrossAdjustmentPercent: '',
	scaCompThreeDollarAdjustment: '',
	//Research and Data
	scaRndResearchDataChecked: '',
	scaRndResearchDataNot: '',
	scaRndMyResearchChecked: '',
	scaRndMyResearchDataSources: '',
	scaRndMyResearchComparableChecked: '',
	scaRndMyResearchComparableDataSources: '',
	scaRndSubjectDateOfPriorSale: '',
	scaRndCompOneDateOfPriorSale: '',
	scaRndCompTwoDateOfPriorSale: '',
	scaRndCompThreeDateOfPriorSale: '',
	scaRndSubjectPriceOfPriorSale: '',
	scaRndCompOnePriceOfPriorSale: '',
	scaRndCompTwoPriceOfPriorSale: '',
	scaRndCompThreePriceOfPriorSale: '',
	scaRndSubjectDataSources: '',
	scaRndCompOneDataSources: '',
	scaRndCompTwoDataSources: '',
	scaRndCompThreeDataSources: '',
	scaRndSubjectEffectiveDate: '',
	scaRndCompOneEffectiveDate: '',
	scaRndCompTwoEffectiveDate: '',
	scaRndCompThreeEffectiveDate: '',
	scaRndSubjectComparableAnalysis: '',
	scaRndSubjectComparableSummary: '',
	
	reconSalesCompApproach: '',
	reconCostApproach: '',
	reconIncomeApproach: '',
	reconApprasialStatusChecked: '',
	reconMarketValue: '',
	reconDateOfInspection: '',
	
	caEstimatedChecked: '',
	caSourceOfDataCost: '',
	caQualityRating: '',
	caEffectiveDate: '',
	caCommentsOnApproach: '',
	caEstimatedEconomicLife: '',
	caOpinionOfSiteValue: '',
	caDwellingOneSqFt: '',
	caDwellingOneCostPerSqFt: '',
	caDwellingOneTotalCost: '',
	caDwellingTwoSqFt: '',
	caDwellingTwoCostPerSqFt: '',
	caDwellingTwoTotalCost: '',
	caGarageSqFt: '',
	caGarageCostPerSqFt: '',
	caGarageTotalCost: '',
	caTotalEstimatedCostNew: '',
	caDepPhysical: '',
	caDepFunctional: '',
	caDepExternal: '',
	caDepTotal: '',
	caDepCostOfImprovements: '',
	caAsIsValue: '',
	caIndicatedValueByCa: '',
	
	incomeEstimatedMonthlyMarketRent: '',
	incomeGrossRentMultiplier: '',
	incomeIndicatedValueByIa: '',
	incomeSummaryOfIa: '',
	
	pudHomeownersAssSelected: ['Select'],
	pudUnitTypesSelected: ['Select'],
	pudLegalProjectName: '',
	pudTotalNumOfPhases: '',
	pudTotalNumOfUnits: '',
	pudTotalNumOfUnitsSold: '',
	pudTotalNumOfUnitsRented: '',
	pudTotalNumOfUnitsForSale: '',
	pudDataSources: '',
	pudConversionSelected: ['Select'],
	pudConversionDate: '',
	pudConversionDataSources: '',
	pudMultiDwellingSelected: ['Select'],
	pudMultiDwellingDataSources: '',
	pudFacilitiesCompleteSelected: ['Select'],
	pudFacilitiesCompleteNo: '',
	pudLeasedToHaSelected: ['Select'],
	pudLeasedToHaYes: '',
	pudDescribeCommon: '',
	
	//Appraiser
	appraiserSignature: '',//This is a data URL
	appraiserName: '',
	appraiserCompanyName: '',
	appraiserCompanyAddress: '',
	appraiserTelephoneNumber: '',
	appraiserEmail: '',
	appraiserDateOfSig: '',
	appraiserEffectiveDate: '',
	appraiserStateCertNum: '',
	appraiserStateLicNum: '',
	appraiserOther: '',
	appraiserStateNum: '',
	appraiserState: '',
	appraiserCertExpirationDate: '',
	appraiserAppraisedValue: '',
	appraiserPropertyAddress: '',
	//Lender/Client
	appraiserLcName: '',
	appraiserLcCompanyName: '',
	appraiserLcEmail: '',
	appraiserLcCompanyAddress: '',
	//SupervisoryAppraiser
	appraiserSaSignature: '',
	appraiserSaName: '',
	appraiserSaCompanyName: '',
	appraiserSaCompanyAddress: '',
	appraiserSaTelephoneNumber: '',
	appraiserSaEmail: '',
	appraiserSaSignatureDate: '',
	appraiserSaStateCertNum: '',
	appraiserSaStateLicNum: '',
	appraiserSaState: '',
	appraiserSaCertExpirationDate: '',
	appraiserSaSubjectPropertyChecked: '',
	appraiserSaSubjectPropertyDate: '',
	appraiserSaCompSalesChecked: '',
	appraiserSaCompSalesDate: '',
	
};

var viewModel;
var emptyViewModel = ko.mapping.fromJS(data);//create the viewModel object from the JavaScript object
/*TODO --retrieve JSON and apply, send JSON to server
	//http://stackoverflow.com/questions/21924495/knockoutjs-ko-mapping-fromjs-not-working
if(JSON EXISTS)
{
	//var jsonData = get json;
	viewModel = ko.mapping.fromJSON(jsonData);////create the viewModel object from the JSON string
	//console.log(jsonData);
}
*/

//Print the current viewModel object
function getUpdatedViewModel()
{
	console.log(ko.mapping.toJS(viewModel));
}

//Remove and Add bindings on load to each node
function reapplyBindings()
{
	$("*[data-bind]").each(function(){
		$(this).unbind();
		ko.cleanNode($(this));
		ko.applyBindings(viewModel, this);
	});
	
	//Add dropdownGrey() function to all drop down lists on page initialization
	$('select').each(function(i, element){
	  dropdownGrey($(this).attr('id'));//initial run
	  $(this).change(function(){//add onchange function
		dropdownGrey($(this).attr('id'))
	  });
	});
	
	//Make date grey when not filled
	$('input[type="date"]').each(function(i, element){
	  dateGrey($(this).attr('id'));//initial run
	  $(this).change(function(){//add onchange function
		dateGrey($(this).attr('id'))
	  });
	});
}

function saveAsJSON()
{
	console.log(ko.mapping.toJSON(viewModel));
}