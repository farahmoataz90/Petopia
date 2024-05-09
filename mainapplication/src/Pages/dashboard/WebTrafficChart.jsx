import React ,{useEffect}from 'react'
import * as echarts from 'echarts';

function WebTrafficChart() {
    useEffect(() => {
        echarts.init(document.querySelector('#trafficChart')).setOption({
          tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: ['40%', '78%'],
              avoidLabelOverlap: false,
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '18',
                  fontWeight: 'bold'
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 2000, name: 'Dogs' },
                { value: 700, name: 'Cats' },
                { value: 500, name: 'Monkeys' },
                { value: 360, name: 'Turtels' }
              
              ],
               // Set custom colors here
               color: ['rgba(255, 133, 26, 1)', 'rgba(255, 174, 102, 1)', 'rgba(255, 201, 153, 1)', 'rgba(251, 219, 191, 1)']
            }
          ]
        });
      }, []);

  return (
     <div id="trafficChart" style={{minHeight: '400px'}} className="echart"></div>
  )
}

export default WebTrafficChart