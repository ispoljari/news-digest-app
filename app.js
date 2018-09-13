function startApp() {
  checkIfMobileOrTablet(window.navigator.userAgent||window.navigator.vendor||window.opera);
  updateScrollDownLabel();
  detectBrowserVendor();
  fadeInHamburgerIcon();
  slideDownMenuOnFocus();
  toggleNavHomeColor();
  blockInitialAnimations();
  retrieveDataFromNewsApi();
	registerEventListenersSelectSubmit();	
}

function registerEventListenersSelectSubmit() {
  toggleHamburgerIconListen();
  scrollUpDownListen();
  swipeUpDownListen();
  largeNavigationLinksListen();
  smallNavigationLinksListen();
	selectNewsGroupListener();
	selectSearchMechanismListener();
	selectSortTypeListener();	
	selectLanguageListener();
	submitNewSearchTerm();
	goToPreviousPage();
	goToNextPage();
}

function detectBrowserVendor() {
  // Firefox 1.0+
  newsApiAppData.browserType.isFirefox = typeof InstallTrigger !== 'undefined';

  // Internet Explorer 6-11
  newsApiAppData.browserType.isIE = /*@cc_on!@*/false || !!document.documentMode;
}

// check if the user agent is mobile or tablet
function checkIfMobileOrTablet(userAgent) {
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(userAgent.substr(0,4))) newsApiAppData.mobileOrTablet = true;
}

function updateScrollDownLabel() {
  if (newsApiAppData.mobileOrTablet) {
    $('.js-scroll-down-label').find('p').text('Swipe Down');
  }
}

// page load animations

function fadeInHamburgerIcon() {
  setTimeout(function() {
    $('.js-small-screen-nav').fadeIn('slow');
  }, 3500);
}

// page interaction animations

function slideDownMenuOnFocus() {
  $('.js-home-small, .js-search-small').focusin(function() {
    openBurgerIcon();
    openBurgerIconColor();
    slideDownTheMenuStrip();
  });

  $('.js-home-small, .js-search-small').focusout(function() {
    closeBurgerIcon();
    closeBurgerIconColor();
    slideUpTheMenuStrip();
  });
}

function toggleHamburgerIconListen() {
  $('body').on('click', '.js-menuToggle', function() {
    animateBurgerIcon();
    changeBurgerIconColor();
    toggleTheMenuStrip();
  });
}

function animateBurgerIcon() {
  $('.js-menuToggle').toggleClass('open');
}

function openBurgerIcon() {
  $('.js-menuToggle').addClass('open');
}

function closeBurgerIcon() {
  $('.js-menuToggle').removeClass('open');
}

function changeBurgerIconColor() {
  $('.js-small-screen-nav').find('span').toggleClass('defaultBurgerColor').toggleClass('changeBurgerColor');
}

function openBurgerIconColor() {
  $('.js-small-screen-nav').find('span').removeClass('defaultBurgerColor').addClass('changeBurgerColor');
}

function closeBurgerIconColor() {
  $('.js-small-screen-nav').find('span').addClass('defaultBurgerColor').removeClass('changeBurgerColor');
}

function toggleTheMenuStrip() {
  $('.js-menu').toggleClass('slideMenuDown');
}

function slideDownTheMenuStrip() {
  $('.js-menu').addClass('slideMenuDown');
}

function slideUpTheMenuStrip() {
  $('.js-menu').removeClass('slideMenuDown');
}

// page transition triger and animations

function scrollUpDownListen() {
  setTimeout(function() {
    if (newsApiAppData.browserType.isFirefox || newsApiAppData.browserType.isIE) {
      $(window).bind('DOMMouseScroll',function(event) {
        if (event.originalEvent.detail>0) {
          // SCROLL DOWN
          executeOnPageScroll();
        }
      });
    } else {
      $('body').on('mousewheel',function(event) {
        if (event.originalEvent.wheelDelta<0) {
          executeOnPageScroll();          
        }
      });
    }
  }, 4500);
}

function executeOnPageScroll() {
  // SCROLL DOWN
  fadeOutHeading();
  fadeOutScrollLabel();
  if (newsApiAppData.sitePage === 1) {
    toggleNavLinksColor();      
    newsApiAppData.sitePage++;
  }
  setTimeout(function() {
    fadeInSearchForm();
  }, 450);
}

function swipeUpDownListen() { // this function is done with pure JS because jQuery doesn't support it
  setTimeout(function() {
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    let yDown = null;

    function handleTouchStart(event) {
      yDown = getTouches(event)[0].clientY;
    }

    function getTouches(event) {
      return event.touches
    }

    function handleTouchMove(event) {
      if (!yDown) {
        return;
      }

      let yUp = event.touches[0].clientY;
      let yDiff = yDown - yUp;

      if (yDiff > 0) {
        // up swipe
        fadeOutHeading();
        fadeOutScrollLabel();
        if (newsApiAppData.sitePage === 1) {
          toggleNavLinksColor();      
          newsApiAppData.sitePage++;
        }
        setTimeout(function() {
          fadeInSearchForm();
        }, 450);
      }
    }s

  }, 4500);
}

function largeNavigationLinksListen() {
  setTimeout(function() {
    $('body').on('click','.js-home-large',function() {
      if (newsApiAppData.sitePage === 2) {
        toggleNavLinksColor();
        newsApiAppData.sitePage--;
      }
      fadeOutSearchForm();
      setTimeout(function() {
        fadeInHeading();
        fadeInScrollLabel();
      }, 380);
      $('.js-home-large').blur();
    });

    $('body').on('click','.js-search-large',function() { 
      if (newsApiAppData.sitePage === 1) {
        toggleNavLinksColor();      
        newsApiAppData.sitePage++;
      }
      fadeOutHeading();
      fadeOutScrollLabel();
      setTimeout(function() {
        fadeInSearchForm();
      }, 450);
      $('.js-search-large').blur();
    });
  }, 4500);
}

function toggleNavLinksColor() {
  $('.js-large-screen-nav').find('.js-nav-bullet').toggleClass('border-page-style');
  $('.js-home-small, .js-search-small').toggleClass('font-page-style');
}

function toggleNavHomeColor() {
  $('.js-home-large').find('.js-nav-bullet').toggleClass('border-page-style');
  $('.js-home-small').toggleClass('font-page-style');
}


function smallNavigationLinksListen() {
  setTimeout(function() {
    $('body').on('click','.js-home-small',function() {
      if (newsApiAppData.sitePage === 2) {
        toggleNavLinksColor();      
        newsApiAppData.sitePage--;
      }
      fadeOutSearchForm();
      setTimeout(function() {
        fadeInHeading();
        fadeInScrollLabel();
      }, 380);
      $('.js-home-small').blur();
      closeBurgerIcon();
      closeBurgerIconColor();
    });

    $('body').on('click','.js-search-small',function() {
      if (newsApiAppData.sitePage === 1) {
        toggleNavLinksColor();      
        newsApiAppData.sitePage++;
      }
      fadeOutHeading();
      fadeOutScrollLabel();
      setTimeout(function() {
        fadeInSearchForm();
      }, 450);
      $('.js-search-small').blur();
      closeBurgerIcon();
      closeBurgerIconColor();
    });
  }, 4500);
}

function fadeOutHeading() {
  $('.js-headings').addClass('eject-down-scroll fade-out-down-scroll');

  setTimeout(function() {
    $('.js-h1').removeClass('animate-typing-h1');
    $('.js-h2').removeClass('animate-typing-h2');
    $('.js-headings').removeClass('eject-down-scroll').css('display','none');
  }, 400);
}

function fadeOutScrollLabel() {
  $('.js-scroll-down-label').addClass('fade-out-down-scroll');
}

function fadeInHeading() {
  $('.js-headings').css('display','block');

  setTimeout(function() {
    $('.js-headings').removeClass('fade-out-down-scroll');
  }, 10);
}

function fadeInScrollLabel() {
  setTimeout(function() {
    $('.js-scroll-down-label').removeClass('fade-out-down-scroll');
  },300);
}

function blockInitialAnimations() {
  setTimeout(function() {
    $('.js-h1').css('opacity','1');
    $('.js-h2').css('opacity','1');

    $('.js-h1').removeClass('animate-typing-h1');
    $('.js-h2').removeClass('animate-typing-h2');
  }, 3600);

  setTimeout(function() {
    $('.js-large-screen-nav').css('opacity','1');
    $('.js-scroll-down-label').removeClass('label-opacity');

    $('.js-large-screen-nav').removeClass('large-screen-nav-animate');
    $('.js-scroll-down-label').removeClass('label-animate');

    $('.js-nav-bullet').removeClass('nav-bullet-animate');
    $('.js-nav-text').removeClass('nav-text-animate');
  }, 5500);
}

function fadeInSearchForm() {
  $('.js-search-form-partial').css('display','block');
  setTimeout(function() {
    $('.js-search-form-partial').addClass('fade-in-down-scroll');
  }, 30);
}

function fadeOutSearchForm() {
  $('.js-search-form-partial').removeClass('fade-in-down-scroll');
  setTimeout(function() {
    $('.js-search-form-partial').css('display','none');
  }, 380);
}

function retrieveDataFromNewsApi() {
	$.when($.getJSON(newsApiSendData.url.endpoint, newsApiSendData.query, storeRetrievedData).fail(renderWarningMessageToUser)).done(executeAfterApiDataRetrieval);
}

function storeRetrievedData(data) {
	deleteStoredDataFromPreviousRetrieval();
	if (validateApiStatusResponse(data.status)) {
		if (!newsApiAppData.firstPass) {
			data.sources.forEach(item => {
				newsApiRetrievedData.sources.push(item);
			});
		} else {		
			data.articles.forEach(item => {
				newsApiRetrievedData.articles.push(item);
			});
			newsApiRetrievedData.numberOfResults = data.totalResults;
		}
	} else {
		newsApiRetrievedData.message = data.message;
		newsApiRetrievedData.code = data.code;		
		renderWarningMessageToUser();	
	}
}

function deleteStoredDataFromPreviousRetrieval() {
	newsApiRetrievedData.articles = [];
	newsApiRetrievedData.numberOfResults = 0;
}

function validateApiStatusResponse(returnMessage) {
	return returnMessage === 'ok' ? true : false;
}

function executeAfterApiDataRetrieval() {
	if (!newsApiAppData.firstPass) {
		generateAutoCompleteDropDownList();	
		updateEndpoint();		
		newsApiSendData.query.pageSize = 9;	
		blockTheNewsSourcesListRedownload();	
	} 
	else {
		if (newsApiRetrievedData.articles.length>0) {
			renderNewNewsArticles();		
			if (newsApiRetrievedData.numberOfResults>9) {
				renderPrevNextButtons();
			}
		} else {
			renderWarningMessageToUser();			
		}
	}
}

function blockTheNewsSourcesListRedownload() {
	newsApiAppData.firstPass = true;											
}

function removeExistingNewsArticles() {
	$('.js-news-result').find('div').remove();
	$('body').find('.js-prev-next').remove();
}

function generateAutoCompleteDropDownList() {
	$('#autocomplete').find('option').remove();
	
	if (newsApiAppData.searchMechanism === 'source') {
		newsApiRetrievedData.sources.forEach(item=> {
			$('#autocomplete').append(`<option value="${item.name}" data-source-id="${item.id}">`);	
		});
	} else if (newsApiAppData.searchMechanism === 'country') {
		newsApiAppData.requestParam.country.forEach(item=> {
			$('#autocomplete').append(`<option value="${item.name}" data-source-id="${item.id}">`);	
		});
	} 
	else if (newsApiAppData.searchMechanism === 'category') {
		newsApiAppData.requestParam.category.forEach(item=> {
			$('#autocomplete').append(`<option value="${item.name}" data-source-id="${item.id}">`);	
		});
	} 
}

function selectNewsGroupListener() {
	$('body').on('change','.js-news-group', function() {
		event.preventDefault();

		newsApiAppData.newsGroup = $(this).find(':selected').val();
		updateEndpoint();

		if (newsApiAppData.newsGroup === 'everything') {
			deleteSearchByOptions();
			renderSortByCategory();
			renderLanguageCategory();			
		} else {
			renderSearchByOptions();
			deleteSortByCategory();
			deleteLanguageCategory();
		}
	});
}

function renderSearchByOptions() {
	$('.js-search-mechanism').find('option[value="source"]').after(
		`<option value="country">Country</option>
		 <option value="category">Category</option>
		`);	
}

function deleteSearchByOptions() {
	$('.js-search-mechanism').find('option[value="country"]').remove();
	$('.js-search-mechanism').find('option[value="category"]').remove();
}

function renderSortByCategory() {
	$('.js-form-news').find('.js-search-mechanism-label').after(
		`<label class="sort-news-label js-sort-news-label">
			<a>Sort By:</a> 
			<select name="sort"	class="sort-news js-sort-news" required>
				<option value="publishedAt" selected>Newest First</option>
				<option value="popularity">Popularity</option>
				<option value="relevancy">Relevancy</option>				
			</select> 
		</label>
		`);

	animateFadeInSortCategory();
}

function renderLanguageCategory() {
	$('.js-form-news').find('.js-sort-news-label').after(
	`<label class="language-news-label js-language-news-label">
		<a>Language:</a> 
		<select name="language"	class="language-news js-language-news" required>		
		</select> 
	</label>
	`);

	newsApiAppData.requestParam.language.forEach(item => {
		$('.js-language-news').append(`<option value="${item.id}">${item.name}</option>`);
	});

	$('.js-language-news').find('option[value="en"]').attr('selected',true);

	animateFadeInLanguageCategory();	
}

function deleteLanguageCategory() {
	$('.js-language-news-label').fadeOut(120,function() {
		$(this).remove();		
	});
}

function deleteSortByCategory() {
	$('.js-sort-news-label').fadeOut(120,function() {
		$(this).remove();		
	});
}

function selectSortTypeListener() {
	$('body').on('change','.js-sort-news', function() {
		event.preventDefault();

		newsApiAppData.sortType = $(this).find(':selected').val();
	});
}

function selectLanguageListener() {
	$('body').on('change','.js-language-news', function() {
		event.preventDefault();

		newsApiAppData.language = $(this).find(':selected').val();
	});
}

function selectSearchMechanismListener() {
	$('body').on('change','.js-search-mechanism', function() {
		event.preventDefault();

		newsApiAppData.searchMechanism = $(this).find(':selected').val();
		updatePlaceholderAndLabelText();
		generateAutoCompleteDropDownList();
	});
}

function submitNewSearchTerm() {
	$('body').on('submit','.js-form-news', function(event) {
		event.preventDefault();

		newsApiAppData.currentSearchTerm = $(this).find('.js-input-search-term').val();
		newsApiAppData.currentPage = 1;
		newsApiAppData.nextPageRenderIndex = 1;

		updateApiQuery(newsApiAppData.currentSearchTerm);
		retrieveDataFromNewsApi();
	});
}

function goToPreviousPage() {
	$('body').on('click','.js-prev-button',function(event) {
		event.preventDefault();

		if (newsApiAppData.currentPage>1) {
			newsApiAppData.currentPage--;	
			newsApiAppData.prevPageRenderFlag = true;	// this flag is used to enable shorter page loading time when user goes to a previous page
			updateApiQuery(newsApiAppData.currentSearchTerm);
			retrieveDataFromNewsApi();				
		}
	});
}

function goToNextPage() {
	$('body').on('click','.js-next-button',function(event) {
		event.preventDefault();
	
		if (newsApiRetrievedData.numberOfResults/9>newsApiAppData.currentPage) {
			if (newsApiAppData.currentPage < newsApiAppData.nextPageRenderIndex) {
				newsApiAppData.nextPageRenderFlag = true; // this flag is used to enable shorter page loading time when user goes to a next page which was already loaded
			}
			if (newsApiAppData.currentPage === newsApiAppData.nextPageRenderIndex){
				newsApiAppData.nextPageRenderIndex++;	
			}
			newsApiAppData.currentPage++;
			updateApiQuery(newsApiAppData.currentSearchTerm);
			retrieveDataFromNewsApi();
		}
	});
}

function updateEndpoint() {
	newsApiSendData.url.endpoint = `https://newsapi.org/v2/${newsApiAppData.newsGroup}`;
}

function updateApiQuery() {
	deleteLastQuery();

	if (newsApiAppData.searchMechanism === 'source') {
		newsApiSendData.query.sources = newsApiRetrievedData.sources.reduce((accu,item)=> {
			if (item.name === newsApiAppData.currentSearchTerm) {	
				accu = item.id;
			} 
			return accu;
		},'');

		if (!newsApiSendData.query.sources) {
			newsApiSendData.query.sources = newsApiAppData.currentSearchTerm;
		}

	} else if (newsApiAppData.searchMechanism === 'country') {
		newsApiSendData.query.country = newsApiAppData.requestParam.country.reduce((accu,item)=> {
			if (item.name === newsApiAppData.currentSearchTerm) {	
				accu = item.id;
			} 
			return accu;
		},'');

		if (!newsApiSendData.query.country) {
			newsApiSendData.query.country = newsApiAppData.currentSearchTerm;
		}

	} else if (newsApiAppData.searchMechanism === 'category') {
		newsApiSendData.query.category = newsApiAppData.requestParam.category.reduce((accu,item)=> {
			if (item.name === newsApiAppData.currentSearchTerm) {	
				accu = item.id;
			} 
			return accu;
		},'');

		if (!newsApiSendData.query.category) {
			newsApiSendData.query.category = newsApiAppData.currentSearchTerm;
		}

	} else {
		newsApiSendData.query.q = newsApiAppData.currentSearchTerm;
	}

	if (newsApiAppData.currentPage > 1) {
		newsApiSendData.query.page = newsApiAppData.currentPage;
	}

	if (newsApiAppData.newsGroup === 'everything') {
		newsApiSendData.query.sortBy = newsApiAppData.sortType;
		newsApiSendData.query.language = newsApiAppData.language;		
	}
}

function deleteLastQuery() {
	delete newsApiSendData.query.sources;
	delete newsApiSendData.query.country;
	delete newsApiSendData.query.category;
	delete newsApiSendData.query.q;		
	delete newsApiSendData.query.page;
	delete newsApiSendData.query.sortBy;
	delete newsApiSendData.query.language;
}

function updatePlaceholderAndLabelText() {
	$('.js-input-search-term').val('');
	
	let placeholder;
	let labelText;
	
	if (newsApiAppData.searchMechanism === 'source') {
		placeholder = newsApiAppData.placeholder[0];
		labelText = newsApiAppData.label[0];		
	} else if (newsApiAppData.searchMechanism === 'country') {
		placeholder = newsApiAppData.placeholder[1];
		labelText = newsApiAppData.label[1];				
	} else if (newsApiAppData.searchMechanism === 'category') {
		placeholder = newsApiAppData.placeholder[2];
		labelText = newsApiAppData.label[2];						
	} else if (newsApiAppData.searchMechanism === 'q') {
		placeholder = newsApiAppData.placeholder[3];
		labelText = newsApiAppData.label[3];				
	}
	$('.js-input-search-term').attr('placeholder', placeholder);
	$('.js-input-label-text').text(labelText);	
}

function renderNewNewsArticles() {
	let newsHTML, imgURL, articleURL, title, description, source;
	
	removeExistingNewsArticles();
	
	adjustUpperLimitsOfCounters();	// If less than 9 articles are returned, the counters have to be adjusted accordingly so that there is no adressing of nonexistent data, which produces an error

	for (let i=0; i<newsApiAppData.counters.outerCountBoundary; i++) {
		$('.js-news-result').append(`<div class="row outer-container-${i} row-bottom-offset"></div>`);	

		for (let j=i*3; j<i*3+newsApiAppData.counters.innerCountBoundary[i]; j++) {

			imgURL = newsApiRetrievedData.articles[j].urlToImage; 
			articleURL = newsApiRetrievedData.articles[j].url ? newsApiRetrievedData.articles[j].url : "#";
			title = newsApiRetrievedData.articles[j].title ? newsApiRetrievedData.articles[j].title : 'The title is not available.';
			description = newsApiRetrievedData.articles[j].description ? newsApiRetrievedData.articles[j].description : 'The description is not available.';
			source = newsApiRetrievedData.articles[j].source.name;

			newsHTML = `<div class="inner-container js-inner-container col-4 col-bottom-offset" hidden>
				<a href="${articleURL}"  target="_blank">
					<img src=${imgURL} onerror="this.src='https://via.placeholder.com/500x300?text=Image not found'">
					<div class="article-text">
						<h3>${title}</h3>
						<p>${description}</p>
						<p>Source: ${source}</p>
					</div>
				</a>
			</div>
			`;
			$(`.outer-container-${i}`).append(newsHTML);
		}
	}
	animateScrollTop();

	if (newsApiAppData.prevPageRenderFlag || newsApiAppData.nextPageRenderFlag) { // When the user is visiting a page that has already loaded, shorter loading time is enabled
		setTimeout(animateFadeInMainContent,newsApiAppData.shortLoadTime);
		newsApiAppData.prevPageRenderFlag = false;
		newsApiAppData.nextPageRenderFlag = false;							
	} else { // When new content is retrieved from the API, to create a smooth effect of articles successively fading in on the page, a setTimeout function is used to delay the render. This is neccessary because sometimes the images take up a whole second to load.
		setTimeout(animateFadeInMainContent,newsApiAppData.longLoadTime);
	}
}

function adjustUpperLimitsOfCounters() {
	newsApiAppData.counters.outerCountBoundary = 0;
	newsApiAppData.counters.innerCountBoundary = [0,0,0];

	if (newsApiRetrievedData.articles.length<=3 && newsApiRetrievedData.articles.length>0) {
		newsApiAppData.counters.outerCountBoundary = 1;
		newsApiAppData.counters.innerCountBoundary[0] = newsApiRetrievedData.articles.length;
	} else if (newsApiRetrievedData.articles.length<=6 && newsApiRetrievedData.articles.length>3) {
			newsApiAppData.counters.outerCountBoundary = 2;
			newsApiAppData.counters.innerCountBoundary[0] = 3;
			newsApiAppData.counters.innerCountBoundary[1] = newsApiRetrievedData.articles.length - 3;
	} else {
			newsApiAppData.counters.outerCountBoundary = 3;		
			newsApiAppData.counters.innerCountBoundary[0] = 3;
			newsApiAppData.counters.innerCountBoundary[1] = 3;
			newsApiAppData.counters.innerCountBoundary[2] = newsApiRetrievedData.articles.length - 6;		
	}
}

function renderWarningMessageToUser() {
	removeExistingNewsArticles();

	if (!newsApiRetrievedData.message) {
		newsApiRetrievedData.message = 'This search produced no results! Please try again by redefining your search parameters or by reloading the page.';
	}
	
	$('.js-news-result').append(
		`<div class="row outer-container js-outer-container row-bottom-offset" hidden>
			<div class="inner-container warning-message col-12 col-bottom-offset">
				<h3>${newsApiRetrievedData.message}</h3>
			</div>
		</div>
		`);	

	animateFadeInWarning();
}

function renderPrevNextButtons() {
	$('main').append(
		`<section class="js-prev-next" hidden>
			<button type="button" class="btn prev-button js-prev-button">Prev</button>
			<button type="button" class="btn next-button js-next-button">Next</button>
  	</section>`
		);
}

function animateScrollTop() { // scroll to the top of the page when going to the previous or next page
  $('html, body').animate({scrollTop: '0px'}, 100);
}

function animateFadeInMainContent() { // every 100ms fade in a new article 
	$('.js-inner-container').each(function(index) {
		$(this).delay(80*index).fadeIn(140);
	});

	setTimeout(function() { // the prev/next buttons are faded in after all of the articles have finnished loading
		$('.js-prev-next').fadeIn(140);
		$('.js-prev-next').addClass('prev-next').css('display','flex');
	},80*$('.js-inner-container').length);	
}

function animateFadeInSortCategory() {
	$('.js-sort-news-label').fadeIn(120)
	.css('display','flex');
}

function animateFadeInLanguageCategory() {
	$('.js-language-news-label').fadeIn(120)
	.css('display','flex');
}

function animateFadeInWarning() { // the warning message is also faded in
 $('.js-outer-container').fadeIn(120);
}

$(startApp);