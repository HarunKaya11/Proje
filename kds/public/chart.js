const ctx1 = document.getElementById('myChart2').getContext('2d');

// Grafik oluşturma (varsayılan olarak bir grafik göster)
let myChart2 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs'],
        datasets: [{
            label: 'Stok Miktarı',
            data: [12, 19, 3, 5, 2],
            backgroundColor: 'rgb(255, 255, 255)',
            borderColor: 'rgb(255, 255, 255)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'white', // Yazı rengini beyaz yap
                    font: {
                        size: 14 // Yazı boyutunu büyüt
                    }
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'white', // X ekseni yazı rengini beyaz yap
                    font: {
                        size: 12 // Yazı boyutunu ayarla
                    }
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)' // X ekseni çizgi rengini hafif beyaz yap
                }
            },
            y: {
                ticks: {
                    color: 'white', // Y ekseni yazı rengini beyaz yap
                    font: {
                        size: 12 // Yazı boyutunu ayarla
                    }
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)' // Y ekseni çizgi rengini hafif beyaz yap
                }
            }
        }
    }
});

// Grafik verilerini güncelleyen bir fonksiyon
function updateChart1(type) {
    let newData;
    let newLabel;

    if (type === 'stok') {
        newLabel = 'Stok Miktarı';
        newData = [12, 19, 3, 5, 2];
    } else if (type === 'satis') {
        newLabel = 'Satış Miktarı';
        newData = [7, 11, 5, 8, 3];
    } else if (type === 'kar') {
        newLabel = 'Kar Miktarı';
        newData = [10, 15, 8, 12, 6];
    }

    myChart2.data.datasets[0].label = newLabel;
    myChart2.data.datasets[0].data = newData;
    myChart2.update();
}

// Dropdown seçim değişikliğini dinle
document.getElementById('kriter-select2').addEventListener('change', (event) => {
    const selectedValue = event.target.value;
    updateChart1(selectedValue);
});