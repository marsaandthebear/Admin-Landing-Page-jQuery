$(document).ready(function() {
    // Initial Sidebar Behavior
    $('.sidebar').css({
        width: '80px' // Sidebar only shows icons initially
    });
    $('.logo-name').hide(); // Hide logo name initially
    $('.link').hide(); // Hide menu text initially
    $('.main-content').css({ width: 'calc(100% - 80px)' }); // Adjust main content width

    // Expand sidebar on hover
    $('.menu-icon').hover(function() {
        $('.sidebar').css({ width: '200px' });
        $('.logo-name').fadeIn(200);
        $('.link').fadeIn(200);
        $('.main-content').css({ width: 'calc(100% - 200px)' }); // Adjust main content width
    }, function() {
        $('.sidebar').css({ width: '80px' });
        $('.logo-name').fadeOut(200);
        $('.link').fadeOut(200);
        $('.main-content').css({ width: 'calc(100% - 80px)' }); // Adjust main content width
    });

    // Card animation effect
    $('.card').css({
        position: 'relative',
        bottom: '-100px', 
        opacity: 0 
    }).animate({
        bottom: '0px',
        opacity: 1 
    }, 2000); 

    // Chart and budget container animation
    $('.chart, .budget-container').css({
        position: 'relative',
        bottom: '-500px',
        opacity: 0 
    }).animate({
        bottom: '0px',
        opacity: 1 
    }, 3000);  

    // Slide toggle effect for dropdown menu
    $('.dropdown').click(function() {
        $(this).find('.dropdown-content').slideToggle('fast');
    });

    // Logo hover animation
    $('.logo-name').hover(function() {
        $(this).animate({
            fontSize: '30px',
        }, 400);
    }, function() {
        $(this).animate({
            fontSize: '25px',
        }, 400);
    });

    // Bar chart initialization (Chart.js)
    const ctxBar = document.getElementById('myBarChart').getContext('2d');
    const myBarChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Revenue',
                data: [12000, 19000, 3000, 5000, 20000, 30000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Pie chart initialization (Chart.js)
    const ctxPie1 = document.getElementById('myPieChart1').getContext('2d');
    const myPieChart1 = new Chart(ctxPie1, {
        type: 'pie',
        data: {
            labels: ['Rent', 'Utilities', 'Salaries', 'Supplies', 'Marketing'],
            datasets: [{
                label: 'Expenses',
                data: [5000, 2000, 15000, 3000, 5000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    const ctxPie2 = document.getElementById('myPieChart2').getContext('2d');
    const myPieChart2 = new Chart(ctxPie2, {
        type: 'pie',
        data: {
            labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
            datasets: [{
                label: 'Revenue',
                data: [8000, 12000, 7000, 9000, 5000],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });

    $('canvas.magnify').mousemove(function(event) {
        const $this = $(this);
        const offsetX = event.offsetX;
        const offsetY = event.offsetY;
    
        // Set CSS variables for the magnifying effect's position
        $this.css('--x', offsetX + 'px');
        $this.css('--y', offsetY + 'px');
    
        // Apply background image and size for magnifying effect
        const zoomLevel = 2; // Pengaturan zoom level
        const canvasImage = this.toDataURL(); // Mengambil data URL dari canvas
        $this.css({
            'background-image': `url(${canvasImage})`,
            'background-size': `${$this.width() * zoomLevel}px ${$this.height() * zoomLevel}px`,
            'background-position': `-${offsetX * zoomLevel - 50}px -${offsetY * zoomLevel - 50}px`
        });
    
        // Show magnifying glass (pseudo-element)
        $this.next('.magnify::after').css({
            left: offsetX + 'px',
            top: offsetY + 'px',
            display: 'block' // Menampilkan kaca pembesar
        });
    }).mouseleave(function() {
        // Kembalikan chart ke keadaan semula saat mouse keluar
        $(this).css({
            'background-image': 'none', // Hapus gambar latar belakang
            'background-size': 'auto', // Kembalikan ukuran
            'background-position': 'auto' // Kembalikan posisi
        });
        
        // Sembunyikan efek kaca pembesar saat mouse keluar
        $(this).next('.magnify::after').css({ display: 'none' }); // Sembunyikan efek kaca pembesar
    });
    
});
