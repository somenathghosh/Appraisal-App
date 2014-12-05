(function() {

  window.tabPage = function() {

    var tabPage = this;

    var myDropzone;
    tabPage.processQueue = function() {
    
      myDropzone.processQueue();
    }

    tabPage.getTabPage = function() {

      myApp.onPageInit('tab-page', function(page) {

        document.getElementById('view-main').className = "view view-main navbar-through frame-shift"

        //read file and append to tab-page
        load1004();
        //load2055();
        //load1025();
        $("#form-select").change(function() {
          eval($("#form-select").val());
          myApp.showPreloader();
          window.setTimeout(function() {
            tabPage.getPictureList();
            tabTracking = numOfTabs;
            tabLength = $("#tab-selector").children().length - 2;
            tinymce.init({
              selector: "notes",
              skin: "custom"
            });
            reapplyBindings();
            myDropzone = new Dropzone("#myDropzone", {
              url: "http://192.168.1.70:3000/api/v1/uploadFile?apiKey=2AC86B2C-C32B5-7EA-E6DC-26D35519C00t&orderID=" + orderID,
              init: function() {
                this.on("complete", function(file) {
                  tabPage.getPictureList();
                });
              }
            });

            myApp.hidePreloader();
          }, 100)

        })

        var photos;

        tabPage.getPictureList();
        //Add modal prompt for signature on button click
        $$('.signature-pad-button').on('click', function(e) {

        });
      });

      myApp.onPageAfterAnimation('tab-page', function(page) {
        tabLength = $("#tab-selector").children().length - 2;
        tinymce.init({
          selector: "notes",
          skin: "custom"
        });
        //tabPage.loadSlider();
        reapplyBindings();
        $("#form-select").html("");
        for (var i = 0; i < formsToLoad.length; i++) {
          $("#form-select").append('<option value="load' + formsToLoad[i] + '();">' + formsToLoad[i] + '</option>');
        }


        myDropzone = new Dropzone("#myDropzone", {
          url: "http://192.168.1.70:3000/api/v1/uploadFile?apiKey=2AC86B2C-C32B5-7EA-E6DC-26D35519C00t&orderID=" + orderID,
          parallelUploads: 25,
          autoProcessQueue: false,
          addRemoveLinks: true,
          init: function() {
            this.on("complete", function(file) {
              tabPage.getPictureList();
            });
          }
        });
      });

      /////////
      tabPage.resizeImages = function(numPhotos) {
        var containerHeight = parseInt($('#tabs-container').height()) - 60;
        var containerWidth = parseInt($('#tabs-container').width());
        var theImages = [];
        var imgs = [];
        for (var i = 0; i < numPhotos; i++) {
          imgs.push($('#image-' + i));
          var img = imgs[i];
          theImages.push(new Image());
          theImages[i].setAttribute("id", i);
          theImages[i].src = img.attr("src");
          theImages[i].onload = function() {
            height = this.height;
            width = this.width;
            var widthDiff = width - containerWidth;
            var heightDiff = height - containerHeight;
            if (widthDiff >= heightDiff) {
              if (widthDiff > 0) {
                imgs[this.getAttribute("id")].width(containerWidth);
                imgs[this.getAttribute("id")].height(containerWidth * (height / width));
                imgs[this.getAttribute("id")].css("top", (containerHeight - containerWidth * (height / width)) / 2);


              } else {
                imgs[this.getAttribute("id")].css("top", (-1 * heightDiff / 2));
                imgs[this.getAttribute("id")].css("left", (-1 * widthDiff / 2));

              }
            } else {
              if (heightDiff > 0) {
                imgs[this.getAttribute("id")].height(containerHeight);
                imgs[this.getAttribute("id")].width(containerHeight * (width / height));
                imgs[this.getAttribute("id")].css("left", (containerWidth - containerHeight * (width / height)) / 2);

              } else {
                imgs[this.getAttribute("id")].css("top", (-1 * heightDiff / 2));
                imgs[this.getAttribute("id")].css("left", (-1 * widthDiff / 2));

              }
            }
          }
        }
      }

      tabPage.loadSlider = function() {
        var mySlider = myApp.slider('.slider-container', {
          speed: 400,
          spaceBetween: 100,
          pagination: '.slider-pagination',
          paginationHide: false
        });
      }

      tabPage.getPictureList = function() {
        $.ajax({
          url: 'http://192.168.1.70:3000/api/v1/uploadedFileList?apiKey=50d30b77-dbae-491b-81b9-c957c8a6d23d&orderID=' + orderID,
          beforeSend: function(xhr) {
            myApp.showPreloader();
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
          }
        }).done(function(data) {
          getPictures(JSON.parse(data))
        }).fail(function(err) {
          myApp.hidePreloader();
          console.log('error: ' + err);
          //TODO add error function
        });

      }

      function getPictures(picList) {
        $("#images").html("");
        if (picList.message === "IMGLST") {
          $("#numPhotos").html(picList.list.length);
          for (var i = 0; i < picList.list.length; i++) {
            $("#images").append(
              '<div class="slider-slide">' +
              '<img id="image-' + i + '" class="slider-image image-style" src="http://192.168.1.70:3000/api/v1/uploadedFile?apiKey=c400e7db-97c2-4007-909f-2f1a52aebba8&orderID=' + orderID + '&name=' + picList.list[i] + '"/>' +
              '</div>'
            );

          }
          tabPage.resizeImages(picList.list.length);
          myApp.hidePreloader();
          tabPage.loadSlider();
        } else {
          myApp.hidePreloader();
        }

      }

      /////////
      //Load required pages for form
      function load1004() {
        var pages = ["1004/1004-subject.html", "1004/1004-contract.html", "1004/1004-neighborhood.html",
          "1004/1004-site.html", "1004/1004-improvements.html", "1004/1004-sales-comparison-approach.html",
          "1004/1004-reconcilliation.html", "1004/1004-notes.html", "1004/1004-cost-approach.html",
          "1004/1004-income.html", "1004/1004-pud-information.html", "1004/1004-appraiser.html",
          "upload.html", "photo-slider.html"
        ];
        var tabNames = ["Subject", "Contract", "Neighborhood",
          "Site", "Improvements", "Sales Comp. App.",
          "Reconcilliation", "Notes", "Cost App.",
          "Income", "PUD Information", "Appraiser",
          "Upload", "Photos"
        ];

        var imageIcons = ["icon-info", "icon-info", "icon-info",
          "icon-info", "icon-info", "icon-info",
          "icon-info", "icon-info", "icon-info",
          "icon-info", "icon-info", "icon-info",
          "icon-upload", "icon-camera"
        ];

        loadTabs(pages, tabNames, imageIcons);
      }

      function load1004c() {
        var pages = ["1004c/1004c-subject.html", "1004c/1004c-contract.html", "1004c/1004c-neighborhood.html",
          "1004c/1004c-site.html", "1004c/1004c-hud-data-plate.html", "1004c/1004c-improvements.html",
          "1004c/1004c-cost-approach.html", "1004/1004-sales-comparison-approach.html", "1004/1004-reconcilliation.html",
          "1004/1004-notes.html", "1004/1004-income.html", "1004/1004-pud-information.html",
          "1004/1004-appraiser.html", "upload.html", "photo-slider.html"
        ];
        var tabNames = ["Subject", "Contract", "Neighborhood",
          "Site", "HUD Data Plate", "Improvements",
          "Cost App.", "Sales Comp. App.", "Reconcilliation",
          "Notes", "Income", "PUD Information",
          "Appraiser", "Upload", "Photos"
        ];

        var imageIcons = ["icon-info", "icon-info", "icon-info",
          "icon-info", "icon-info", "icon-info",
          "icon-info", "icon-info", "icon-info",
          "icon-info", "icon-info", "icon-info",
          "icon-info", "icon-upload", "icon-camera"
        ];

        loadTabs(pages, tabNames, imageIcons);
      }

      function load1004d() {
        var pages = ["1004d/1004d-subject.html", "1004d/1004d-summary-appraisal-update-report.html", "1004d/1004d-certification-of-completion.html",
          "1004d/1004d-signatures.html", "upload.html", "photo-slider.html"
        ];
        var tabNames = ["Subject", "Sum. App. Upd. Rep.", "Cert. of Comp.",
          "Signatures", "Upload", "Photos"
        ];

        var imageIcons = ["icon-info", "icon-info", "icon-info",
          "icon-info", "icon-upload", "icon-camera"
        ];

        loadTabs(pages, tabNames, imageIcons);
      }

      function load2055() {
        var pages = ["1004/1004-subject.html", "1004/1004-contract.html", "1004/1004-neighborhood.html",
          "1004/1004-site.html", "2055/2055-improvements.html", "1004/1004-sales-comparison-approach.html",
          "1004/1004-reconcilliation.html", "1004/1004-notes.html", "1004/1004-cost-approach.html",
          "1004/1004-income.html", "1004/1004-pud-information.html", "1004/1004-appraiser.html",
          "upload.html", "photo-slider.html"
        ];

        var tabNames = ["Subject", "Contract", "Neighborhood",
          "Site", "Improvements", "Sales Comp. App.",
          "Reconcilliation", "Notes", "Cost App.",
          "Income", "PUD Information", "Appraiser",
          "Upload", "Photos"
        ];

        var imageIcons = ["icon-info", "icon-info", "icon-info",
          "icon-info", "icon-info", "icon-info",
          "icon-info", "icon-info", "icon-info",
          "icon-info", "icon-info", "icon-info",
          "icon-upload", "icon-camera"
        ];

        loadTabs(pages, tabNames, imageIcons);
      }

      function load1025() {
        var pages = ["1004/1004-subject.html", "1004/1004-contract.html", "1004/1004-neighborhood.html",
          "1004/1004-site.html", "1025/1025-improvements.html", "1025/1025-comparable-rental-data.html",
          "1025/1025-subject-rent-schedule.html", "1025/1025-prior-sale-history.html", "1025/1025-sales-comparison-approach.html",
          "1004/1004-income.html", "1004/1004-reconcilliation.html", "1004/1004-notes.html",
          "1004/1004-cost-approach.html", "1004/1004-pud-information.html", "1004/1004-appraiser.html",
          "upload.html", "photo-slider.html"
        ];

        var tabNames = ["Subject", "Contract", "Neighborhood",
          "Site", "Improvements", "Comp. Rent Data",
          "Subj. Rent Sched.", "Prior Sale Hist.", "Sales Comp. App.",
          "Income", "Reconcilliation", "Notes",
          "Cost Approach", "PUD Information", "Appraiser",
          "Upload", "Photos"
        ];

        var imageIcons = ["icon-info", "icon-info", "icon-info",
          "icon-info", "icon-info", "icon-info",
          "icon-info", "icon-info", "icon-info",
          "icon-info", "icon-info", "icon-info",
          "icon-info", "icon-info", "icon-info",
          "icon-upload", "icon-camera"
        ];

        loadTabs(pages, tabNames, imageIcons);
      }

      function load1073() {
        var pages = ["1073/1073-subject.html", "1004/1004-contract.html", "1004/1004-neighborhood.html",
          "1073/1073-project-site.html", "1073/1073-project-information.html", "1073/1073-project-analysis.html",
          "1073/1073-unit-description.html", "1075/1075-prior-sale-history.html", "1073/1073-sales-comparison-approach.html",
          "1004/1004-income.html", "1004/1004-reconcilliation.html", "1004/1004-appraiser.html",
          "upload.html", "photo-slider.html"
        ];
        var tabNames = ["Subject", "Contract", "Neighborhood",
          "Project Site", "Proj. Info.", "Proj. Analysis",
          "Unit Desc.", "Prior Sale His.", "Sales Comp. App.",
          "Income", "Reconcilliation", "Appraiser",
          "Upload", "Photos"
        ];

        var imageIcons = ["icon-info", "icon-info", "icon-info",
          "icon-info", "icon-info", "icon-info",
          "icon-info", "icon-info", "icon-info",
          "icon-info", "icon-info", "icon-info",
          "icon-upload", "icon-camera"
        ];

        loadTabs(pages, tabNames, imageIcons);
      }

      function load1075() {
        var pages = ["1075/1075-subject.html", "1004/1004-contract.html", "1004/1004-neighborhood.html",
          "1075/1075-project-site.html", "1075/1075-project-information.html", "1075/1075-project-analysis.html",
          "1075/1075-unit-improvements.html", "1075/1075-prior-sale-history.html", "1075/1075-sales-comparison-approach.html",
          "1004/1004-income.html", "1004/1004-reconcilliation.html", "1004/1004-appraiser.html",
          "upload.html", "photo-slider.html"
        ];
        var tabNames = ["Subject", "Contract", "Neighborhood",
          "Project Site", "Proj. Info.", "Proj. Analysis",
          "Unit Improv.", "Prior Sale His.", "Sales Comp. App.",
          "Income", "Reconcilliation", "Appraiser",
          "Upload", "Photos"
        ];

        var imageIcons = ["icon-info", "icon-info", "icon-info",
          "icon-info", "icon-info", "icon-info",
          "icon-info", "icon-info", "icon-info",
          "icon-info", "icon-info", "icon-info",
          "icon-upload", "icon-camera"
        ];

        loadTabs(pages, tabNames, imageIcons);
      }
    }
  }

  function loadTabs(pages, tabNames, imageIcons) {
    //clear divs
    $('#tab-selector').html("");
    $('#tabs-container').html("");

    //fill navigation bar and tabs
    $('#tab-selector').append('<div><a href="" class="prev invisible"><i class="icon icon-prev"></i></a></div>');
    for (var x = 0; x < pages.length; x++) {
      $('#tab-selector').append('<a href="#tab-' + (x + 1) + '" id="tab-icon-' + (x + 1) + '" class="tab-link"><i class="icon ' + imageIcons[x] + '"> </i><span class="tabbar-label">' + tabNames[x] + '</span></a>');
      $('#tabs-container').append('<div id="tab-' + (x + 1) + '" class="tab"></div>');
      $("#tab-" + (x + 1)).load(pages[x]);
      if (x > 3) {
        $('#tab-icon-' + (x + 1)).addClass('hidden');
        $('#tab-icon-' + (x + 1)).removeClass('tab-link');
      }
    }
    $('#tab-icon-' + (pages.length)).children().eq(0).append('<span id="numPhotos" class="badge bg-green">0</span>');

    $('#tab-selector').append('<div><a href="" class="link next"><i class="icon icon-next"></i></a></div>');
    $('#tab-icon-1').addClass('active');
    $('#tab-1').addClass('active');
  }

})();