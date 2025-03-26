"use client"
import React from "react";
import * as echarts from 'echarts';
import { Card, CardContent } from "@/components/ui/card";


export default function Graph(){
    const stats = {
        total: 8,
        confirmed: 5,
        pending: 2,
        cancelled: 1
      };
      const getStatusColor = (status: string) => {
        switch (status) {
          case 'confirmed':
            return 'bg-green-100 text-green-800';
          case 'pending':
            return 'bg-yellow-100 text-yellow-800';
          case 'cancelled':
            return 'bg-red-100 text-red-800';
          default:
            return 'bg-gray-100 text-gray-800';
        }
      };
      React.useEffect(() => {
        const chartDom = document.getElementById('appointmentsChart');
        if (chartDom) {
          const myChart = echarts.init(chartDom);
          const option = {
            animation: false,
            tooltip: {
              trigger: 'item'
            },
            legend: {
              top: '5%',
              left: 'center'
            },
            series: [
              {
                name: 'Appointments',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                  borderRadius: 10,
                  borderColor: '#fff',
                  borderWidth: 2
                },
                label: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  label: {
                    show: true,
                    fontSize: 20,
                    fontWeight: 'bold'
                  }
                },
                labelLine: {
                  show: false
                },
                data: [
                  { value: stats.confirmed, name: 'Confirmed' },
                  { value: stats.pending, name: 'Pending' },
                  { value: stats.cancelled, name: 'Cancelled' }
                ]
              }
            ]
          };
          myChart.setOption(option);
        }
      }, []);
    return(
<Card className="md:col-span-2">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Appointments Overview</h2>
              <div id="appointmentsChart" style={{ height: '300px' }}></div>
            </CardContent>
          </Card>
    )
}