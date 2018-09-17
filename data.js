// ---------- MAIN DATA STRUCTURES ----------- 
// -------------------------------------------

const newsApiRetrievedData = {
	sources : [],
	articles : [],
	numberOfResults : 0,
	code : '',
	message : ''
}

const newsApiSendData = {
	url : {
		endpoint : 'https://newsapi.org/v2/sources'
	},
	query : {
		apiKey : 'ec1668ab36c74202b13115bfa5174804',
	}
}

const newsApiAppData = {
  mobileOrTablet: false,
  browserType : {
    isFirefox : false,
    isIE : false
  },
  sitePage : 1,
  scrollFlag : true,
	newsGroup : 'top-headlines',
	searchMechanism : 'source',
	sortType : 'publishedAt',
	language : 'en',
	currentSearchTerm : '',
	currentPage : 1,
	prevPageRenderFlag : false, 
	nextPageRenderIndex : 1,
	nextPageRenderFlag : false, 
	firstFilterOption : false,
	selectedSearchMechanisms : [],	
	longLoadTime : 1000,
	shortLoadTime : 10, 
	searchOptions : {
		topHeadlines : [{
			text : 'Country',
			value : 'coutry'
		},{
			text : 'Category',
			value : 'category'
		}],
		everything : [{
			text : 'Language',
			value : 'language'
		},{
			label : 'Sort By',
			options : [{
				text : 'Relevancy',
				value : 'relevancy'
			},
			{
				text : 'Popularity',
				value : 'popularity'
			},{
				text : 'Newest',
				value : 'publishedAt'
				}]
			}]
		},
	additionalInputAdded : false,
	firstPass : false,
	placeholder : ['CNN', 'Austria', 'Science', 'Climate'],
	label : ['Media Source:', 'Country:', 'Category:', 'Keyword:'],
	counters: {
		outerCountBoundary : 0,
		innerCountBoundary : [0,0,0]
	},
	requestParam : {
		country : [{
			id : 'ar',
			name : 'Argentina'
		},{
			id : 'at',
			name : 'Austria'
		},{
			id : 'au',
			name : 'Australia'
		},{
			id: 'be',
			name : 'Belgium'
		},{
			id : 'bg',
			name : 'Bulgaria'			
		},{
			id : 'br',
			name : 'Brazil'
		},{
			id : 'ca',
			name : 'Canada'
		},{
			id : 'ch',
			name : 'Switzerland'
		},{
			id : 'cn',
			name : 'China'
		},{
			id : 'co',
			name : 'Colombia'
		},{
			id : 'cu',
			name : 'Cuba'
		},{
			id : 'cz',
			name : 'Czech Republic'
		},{
			id : 'de',
			name : 'Germany'
		},{
			id : 'eg',
			name : 'Egypt'
		},{
			id : 'fr',
			name : 'France'
		},{
			id : 'gb',
			name : 'Great Britain'
		},{
			id : 'gr',
			name :  'Greece'
		},{
			id : 'hk',
			name : 'Hong Kong'
		},{
			id : 'hu',
			name : 'Hungary'
		},{
			id : 'id',
			name : 'Indonesia'
		},{
			id : 'ie',
			name : 'Ireland'
		},{
			id : 'il',
			name : 'Israel'
		},{
			id : 'it',
			name : 'Italy'
		},{
			id : 'jp',
			name : 'Japan'
		},{
			id : 'kr',
			name : 'Republic of Korea'
		},{
			id : 'lt',
			name : 'Lithuania'
		},{
			id: 'lv',
			name: 'Latvia'
		},{
			id : 'ma',
			name : 'Morocco'
		},{
			id : 'mx',
			name : 'Mexico'
		},{
			id : 'my',
			name : 'Malasya'
		},{
			id : 'ng',
			name : 'Nigeria'
		},{
			id : 'nl',
			name : 'Netherlands'
		},{
			id : 'no',
			name : 'Norway'
		},{
			id : 'nz',
			name : 'New Zealand'
		},{
			id : 'ph',
			name : 'Phillipines'
		},{
			id : 'pl',
			name : 'Poland'
		},{
			id : 'pt',
			name : 'Portugal'
		},{
			id : 'ro',
			name : 'Romania'
		},{
			id : 'rs',
			name : 'Serbia'
		},{
			id : 'ru',
			name : 'Russian Federation'
		},{
			id : 'sa',
			name : 'Saudi Arabia'
		},{
			id : 'se',
			name : 'Sweden'
		},{
			id : 'sg',
			name : 'Singapore'
		},{
			id : 'si',
			name : 'Slovenia'
		},{
			id : 'sk',
			name : 'Slovakia'
		},{
			id : 'th',
			name : 'Thailand'
		},{
			id : 'tr',
			name : 'Turkey'
		},{
			id : 'tw',
			name : 'Taiwan'
		},{
			id : 'ua',
			name : 'Ukraine'			
		},{
			id : 'us',
			name : 'United States'			
		},{
			id : 'ae',
			name : 'United Arab Emirates'
		},{
			id : 've',
			name : 'Venezuela'			
		},{
			id : 'za',
			name : 'South Africa'			
		}
		],
		category : [{
				id : 'business',
				name : 'Business'
			},
			{
				id : 'entertainment',
				name :  'Entertainment'
			},
			{
				id : 'general',
				name : 'General'
			},
			{
				id : 'health',
				name : 'Health'
			},
			{
				id : 'science',
				name : 'Science'
			},
			{
				id : 'sports',
				name : 'Sports'
			},
			{
				id : 'technology',
				name : 'Technology'
			}],
		language : [{
			id : 'ar',
			name : 'Arabic'
		},
		{
			id : 'de',
			name : 'German'
		},
		{
			id : 'en',
			name : 'English'
		},
		{
			id : 'es',
			name : 'Spanish'
		},
		{
			id : 'fr',
			name : 'French'
		},
		{
			id : 'he',
			name : 'Hebrew'
		},
		{
			id : 'it',
			name : 'Italian'
		},
		{
			id : 'nl',
			name : 'Dutch'
		},
		{
			id : 'no',
			name : 'Norwegian'
		},
		{
			id : 'pt',
			name : 'Portuguese'
		},
		{
			id : 'ru',
			name : 'Russian'
		},
		{
			id : 'zh',
			name : 'Chinese'
		}]
	}
}