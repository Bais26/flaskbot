 const sentimentResults = {{ sentiment_results | tojson }};
        let positiveCount = 0;
        let negativeCount = 0;

        sentimentResults.forEach(result => {
            if (result.sentiment === 'Positif') {
                positiveCount++;
            } else {
                negativeCount++;
            }
        });

        const data = {
            labels: ['Positive', 'Negative'],
            datasets: [{
                label: 'Sentiment Comparison',
                data: [positiveCount, negativeCount],
                backgroundColor: ['#36A2EB', '#FF6384'],
                hoverOffset: 4
            }]
        };

        const ctx = document.getElementById('sentimentPieChart').getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                    title: {
                        display: true,
                        text: 'Sentiment Distribution'
                    }
                }
            }
        });