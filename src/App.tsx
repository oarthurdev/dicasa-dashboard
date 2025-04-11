import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RankingList from './components/RankingList';
import Heatmap from './components/Heatmap';
import Funnel from './components/Funnel';
import { Broker, HeatmapData, FunnelData } from './types';

function App() {
  const [brokers] = useState<Broker[]>([
    {
      id: 1,
      name: 'Alex Souza',
      points: 127,
      avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop',
      badges: ['trophy', 'thumbsUp']
    },
    {
      id: 2,
      name: 'Thiago Almeida',
      points: 110,
      avatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=100&h=100&fit=crop',
      badges: ['target', 'thumbsUp']
    },
    {
      id: 3,
      name: 'Ana Martins',
      points: 95,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      badges: ['target']
    },
    {
      id: 4,
      name: 'Carla Ferreira',
      points: 84,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      badges: ['target']
    }
  ]);

  const [heatmapData] = useState<HeatmapData[]>([
    { day: 'Seg', hour: '18 h', value: 9 },
    { day: 'Ter', hour: '18 h', value: 8 },
    { day: 'Qua', hour: '18 h', value: 6 },
    { day: 'Qui', hour: '18 h', value: 8 },
    { day: 'Sex', hour: '18 h', value: 8 }
  ]);

  const [funnelData] = useState<FunnelData[]>([
    { name: 'Leads', value: 300 },
    { name: 'Propostas', value: 200 },
    { name: 'Vendas', value: 100 }
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/kommo-proxy`, {
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          }
        });
        console.log('Kommo API Response:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center bg-blue-600 p-6">
            <h1 className="text-3xl font-bold text-white">RANKING GAMIFICADO DICASA</h1>
            <div className="flex items-center">
              <div className="bg-white p-2 rounded">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNDAgODAiPjxwYXRoIGZpbGw9IiMwMDcwYzAiIGQ9Ik00NS44IDIwLjZjLTIuNyAwLTUuMi41LTcuNCAxLjUtMi4yIDEtNC4xIDIuNC01LjcgNC4yLTEuNiAxLjgtMi44IDMuOS0zLjcgNi4zLS45IDIuNC0xLjMgNS0xLjMgNy44IDAgMi44LjQgNS40IDEuMyA3LjguOSAyLjQgMi4xIDQuNSAzLjcgNi4zIDEuNiAxLjggMy41IDMuMiA1LjcgNC4yIDIuMiAxIDQuNyAxLjUgNy40IDEuNSAyLjcgMCA1LjItLjUgNy40LTEuNSAyLjItMSA0LjEtMi40IDUuNy00LjIgMS42LTEuOCAyLjgtMy45IDMuNy02LjMuOS0yLjQgMS4zLTUgMS4zLTcuOCAwLTIuOC0uNC01LjQtMS4zLTcuOC0uOS0yLjQtMi4xLTQuNS0zLjctNi4zLTEuNi0xLjgtMy41LTMuMi01LjctNC4yLTIuMi0xLTQuNy0xLjUtNy40LTEuNXptMCA5LjhjMS4yIDAgMi4zLjIgMy4zLjcgMSAuNSAxLjkgMS4yIDIuNiAyLjEuNy45IDEuMyAyIDEuNyAzLjMuNSAxLjMuNyAyLjcuNyA0LjMgMCAxLjYtLjIgMy0uNyA0LjMtLjUgMS4zLTEuMSAyLjQtMS43IDMuMy0uNy45LTEuNiAxLjYtMi42IDIuMS0xIC41LTIuMS43LTMuMy43LTEuMiAwLTIuMy0uMi0zLjMtLjctMS0uNS0xLjktMS4yLTIuNi0yLjEtLjctLjktMS4zLTItMS43LTMuMy0uNS0xLjMtLjctMi43LS43LTQuMyAwLTEuNi4yLTMgLjctNC4zLjUtMS4zIDEuMS0yLjQgMS43LTMuMy43LS45IDEuNi0xLjYgMi42LTIuMSAxLS41IDIuMS0uNyAzLjMtLjd6Ii8+PHBhdGggZmlsbD0iI2ZmYTUwMCIgZD0iTTg1LjMgMjAuNmMtMi43IDAtNS4yLjUtNy40IDEuNS0yLjIgMS00LjEgMi40LTUuNyA0LjItMS42IDEuOC0yLjggMy45LTMuNyA2LjMtLjkgMi40LTEuMyA1LTEuMyA3LjggMCAyLjguNCA1LjQgMS4zIDcuOC45IDIuNCAyLjEgNC41IDMuNyA2LjMgMS42IDEuOCAzLjUgMy4yIDUuNyA0LjIgMi4yIDEgNC43IDEuNSA3LjQgMS41IDIuNyAwIDUuMi0uNSA3LjQtMS41IDIuMi0xIDQuMS0yLjQgNS43LTQuMiAxLjYtMS44IDIuOC0zLjkgMy43LTYuMy45LTIuNCAxLjMtNSAxLjMtNy44IDAtMi44LS40LTUuNC0xLjMtNy44LS45LTIuNC0yLjEtNC41LTMuNy02LjMtMS42LTEuOC0zLjUtMy4yLTUuNy00LjItMi4yLTEtNC43LTEuNS03LjQtMS41em0wIDkuOGMxLjIgMCAyLjMuMiAzLjMuNyAxIC41IDEuOSAxLjIgMi42IDIuMS43LjkgMS4zIDIgMS43IDMuMy41IDEuMy43IDIuNy43IDQuMyAwIDEuNi0uMiAzLS43IDQuMy0uNSAxLjMtMS4xIDIuNC0xLjcgMy4zLS43LjktMS42IDEuNi0yLjYgMi4xLTEgLjUtMi4xLjctMy4zLjctMS4yIDAtMi4zLS4yLTMuMy0uNy0xLS41LTEuOS0xLjItMi42LTIuMS0uNy0uOS0xLjMtMi0xLjctMy4zLS41LTEuMy0uNy0yLjctLjctNC4zIDAtMS42LjItMyAuNy00LjMuNS0xLjMgMS4xLTIuNCAxLjctMy4zLjctLjkgMS42LTEuNiAyLjYtMi4xIDEtLjUgMi4xLS43IDMuMy0uN3oiLz48cGF0aCBmaWxsPSIjMDA3MGMwIiBkPSJNMTI0LjggMjAuNmMtMi43IDAtNS4yLjUtNy40IDEuNS0yLjIgMS00LjEgMi40LTUuNyA0LjItMS42IDEuOC0yLjggMy45LTMuNyA2LjMtLjkgMi40LTEuMyA1LTEuMyA3LjggMCAyLjguNCA1LjQgMS4zIDcuOC45IDIuNCAyLjEgNC41IDMuNyA2LjMgMS42IDEuOCAzLjUgMy4yIDUuNyA0LjIgMi4yIDEgNC43IDEuNSA3LjQgMS41IDIuNyAwIDUuMi0uNSA3LjQtMS41IDIuMi0xIDQuMS0yLjQgNS43LTQuMiAxLjYtMS44IDIuOC0zLjkgMy43LTYuMy45LTIuNCAxLjMtNSAxLjMtNy44IDAtMi44LS40LTUuNC0xLjMtNy44LS45LTIuNC0yLjEtNC41LTMuNy02LjMtMS42LTEuOC0zLjUtMy4yLTUuNy00LjItMi4yLTEtNC43LTEuNS03LjQtMS41em0wIDkuOGMxLjIgMCAyLjMuMiAzLjMuNyAxIC41IDEuOSAxLjIgMi42IDIuMS43LjkgMS4zIDIgMS43IDMuMy41IDEuMy43IDIuNy43IDQuMyAwIDEuNi0uMiAzLS43IDQuMy0uNSAxLjMtMS4xIDIuNC0xLjcgMy4zLS43LjktMS42IDEuNi0yLjYgMi4xLTEgLjUtMi4xLjctMy4zLjctMS4yIDAtMi4zLS4yLTMuMy0uNy0xLS41LTEuOS0xLjItMi42LTIuMS0uNy0uOS0xLjMtMi0xLjctMy4zLS41LTEuMy0uNy0yLjctLjctNC4zIDAtMS42LjItMyAuNy00LjMuNS0xLjMgMS4xLTIuNCAxLjctMy4zLjctLjkgMS42LTEuNiAyLjYtMi4xIDEtLjUgMi4xLS43IDMuMy0uN3oiLz48cGF0aCBmaWxsPSIjZmZhNTAwIiBkPSJNMTY0LjMgMjAuNmMtMi43IDAtNS4yLjUtNy40IDEuNS0yLjIgMS00LjEgMi40LTUuNyA0LjItMS42IDEuOC0yLjggMy45LTMuNyA2LjMtLjkgMi40LTEuMyA1LTEuMyA3LjggMCAyLjguNCA1LjQgMS4zIDcuOC45IDIuNCAyLjEgNC41IDMuNyA2LjMgMS42IDEuOCAzLjUgMy4yIDUuNyA0LjIgMi4yIDEgNC43IDEuNSA3LjQgMS41IDIuNyAwIDUuMi0uNSA3LjQtMS41IDIuMi0xIDQuMS0yLjQgNS43LTQuMiAxLjYtMS44IDIuOC0zLjkgMy43LTYuMy45LTIuNCAxLjMtNSAxLjMtNy44IDAtMi44LS40LTUuNC0xLjMtNy44LS45LTIuNC0yLjEtNC41LTMuNy02LjMtMS42LTEuOC0zLjUtMy4yLTUuNy00LjItMi4yLTEtNC43LTEuNS03LjQtMS41em0wIDkuOGMxLjIgMCAyLjMuMiAzLjMuNyAxIC41IDEuOSAxLjIgMi42IDIuMS43LjkgMS4zIDIgMS43IDMuMy41IDEuMy43IDIuNy43IDQuMyAwIDEuNi0uMiAzLS43IDQuMy0uNSAxLjMtMS4xIDIuNC0xLjcgMy4zLS43LjktMS42IDEuNi0yLjYgMi4xLTEgLjUtMi4xLjctMy4zLjctMS4yIDAtMi4zLS4yLTMuMy0uNy0xLS41LTEuOS0xLjItMi42LTIuMS0uNy0uOS0xLjMtMi0xLjctMy4zLS41LTEuMy0uNy0yLjctLjctNC4zIDAtMS42LjItMyAuNy00LjMuNS0xLjMgMS4xLTIuNCAxLjctMy4zLjctLjkgMS42LTEuNiAyLjYtMi4xIDEtLjUgMi4xLS43IDMuMy0uN3oiLz48cGF0aCBmaWxsPSIjMDA3MGMwIiBkPSJNMjAzLjggMjAuNmMtMi43IDAtNS4yLjUtNy40IDEuNS0yLjIgMS00LjEgMi40LTUuNyA0LjItMS42IDEuOC0yLjggMy45LTMuNyA2LjMtLjkgMi40LTEuMyA1LTEuMyA3LjggMCAyLjguNCA1LjQgMS4zIDcuOC45IDIuNCAyLjEgNC41IDMuNyA2LjMgMS42IDEuOCAzLjUgMy4yIDUuNyA0LjIgMi4yIDEgNC43IDEuNSA3LjQgMS41IDIuNyAwIDUuMi0uNSA3LjQtMS41IDIuMi0xIDQuMS0yLjQgNS43LTQuMiAxLjYtMS44IDIuOC0zLjkgMy43LTYuMy45LTIuNCAxLjMtNSAxLjMtNy44IDAtMi44LS40LTUuNC0xLjMtNy44LS45LTIuNC0yLjEtNC41LTMuNy02LjMtMS42LTEuOC0zLjUtMy4yLTUuNy00LjItMi4yLTEtNC43LTEuNS03LjQtMS41em0wIDkuOGMxLjIgMCAyLjMuMiAzLjMuNyAxIC41IDEuOSAxLjIgMi42IDIuMS43LjkgMS4zIDIgMS43IDMuMy41IDEuMy43IDIuNy43IDQuMyAwIDEuNi0uMiAzLS43IDQuMy0uNSAxLjMtMS4xIDIuNC0xLjcgMy4zLS43LjktMS42IDEuNi0yLjYgMi4xLTEgLjUtMi4xLjctMy4zLjctMS4yIDAtMi4zLS4yLTMuMy0uNy0xLS41LTEuOS0xLjItMi42LTIuMS0uNy0uOS0xLjMtMi0xLjctMy4zLS41LTEuMy0uNy0yLjctLjctNC4zIDAtMS42LjItMyAuNy00LjMuNS0xLjMgMS4xLTIuNCAxLjctMy4zLjctLjkgMS42LTEuNiAyLjYtMi4xIDEtLjUgMi4xLS43IDMuMy0uN3oiLz48L3N2Zz4="
                  alt="Dicasa Logo"
                  className="h-12"
                />
                <div className="text-blue-600 text-xs text-center mt-1">seu primeiro imóvel</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 bg-blue-50">
            {/* Left Column */}
            <div className="space-y-6">
              <RankingList brokers={brokers} />
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow hover:bg-blue-50">
                  VER RANKING INDIVIDUAL
                </button>
                <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow hover:bg-blue-50">
                  DESEMPENHO POR SEMANA
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <Heatmap data={heatmapData} />
              <Funnel data={funnelData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;