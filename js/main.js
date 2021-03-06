

function init(){
    // Select DOM Items
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const menuNav = document.querySelector('.menu-nav');
    const menuBranding = document.querySelector('.menu-branding');
    const navItems = document.querySelectorAll('.nav-item');

    // Set Initial State Of Menu
    let showMenu = false;

    menuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
        if (!showMenu) {
            menuBtn.classList.add('close');
            menu.classList.add('show');
            menuNav.classList.add('show');
            menuBranding.classList.add('show');
            navItems.forEach(item => item.classList.add('show'));

            // Set Menu State
            showMenu = true;
        } else {
            menuBtn.classList.remove('close');
            menu.classList.remove('show');
            menuNav.classList.remove('show');
            menuBranding.classList.remove('show');
            navItems.forEach(item => item.classList.remove('show'));

            // Set Menu State
            showMenu = false;
        }
    }

    // $(".fa-file-alt, .fa-linkedin, .fa-github , .fa-id-card ").mouseover(function () {
    //     $(this).addClass("fa-spin")
    // })
    // $(".fa-file-alt, .fa-linkedin, .fa-github , .fa-id-card ").mouseleave(function () {
    //     $(this).removeClass("fa-spin")
    // })

    printGraph();

}

//typed js



function printGraph(){
    var ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["Fintech", "TestWebBDD", "Atlassian" , "Freshdesk", "HTML/CSS", "JS/PHP/SQL", "GIT", "API"],
            datasets: [{
                label: 'Skills',
                data: [90, 85, 80, 85, 80, 72, 80, 80],
                backgroundColor: [
                  "#35feff",
                  "#35feff",
                  "#35feff",
                  "#35feff",
                  "#35feff",
                  "#35feff",
                  "#35feff",
                  "#35feff",
      
                ],
                //  borderColor: [
                //
                //    "#e7d184",
                //    "#e7d184",
                //    "#e7d184",
                //    "#e7d184",
                //    "#e7d184",
                //    "#e7d184",
                //    "#e7d184",
                //    "#e7d184",
                //
                // ],

                borderWidth: 1
            }]
        },
        options: {

          // animation: true,
          // animationSteps: 4000,
          // animationEasing: "linear",
          // responsive: true,
          // showTooltips: true,
          // segmentShowStroke: false,
          // maintainAspectRatio: true,
          // percentageInnerCutout: 70,

            legend: {
                display: false,
                labels: {
                    fontColor: 'white',
                    fontSize: 15,
                    fontStyle: "bold"
                }
            },
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: "white"
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: "white"
                    }
                }],
            }
        }
    });

    // IDEA: Change language to the validate output

      // $("form").validate({
      //   lang: "en"
      // });

    // $("form").validator({ lang: 'en' });


}

$(document).ready(init);
