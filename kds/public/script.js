// Pie Chart
const ctx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
        datasets: [{
            data: [10.3, 38.5, 17.2, 27.6, 6.9, 3.5, 37.5, 22.5, 21.5, 24.5, 42.5, 12.5],
            backgroundColor: ['#2E59D9', '#E74C3C', '#28B463', '#F39C12', '#8E44AD', '#1ABC9C', '#E74C4A', '#E74C5B', '#F74C6D', '#D74C7A', '#A74C8E', '#B74C9D']
        }]
    },
    options: {
        responsive: true,
        legend: {
            position: 'right'
        }
    }
});