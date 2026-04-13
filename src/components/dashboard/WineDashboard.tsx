import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Filter, 
  TrendingDown, 
  TrendingUp, 
  Wine as WineIcon, 
  FileSpreadsheet,
  ArrowLeft
} from 'lucide-react';
import { mockWines, Wine } from '@/lib/mockData';
import { Button } from '@/components/ui/button';

export default function WineDashboard({ onBack }: { onBack: () => void }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [wines] = useState<Wine[]>(mockWines);

  const filteredWines = wines.filter(wine => 
    wine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    wine.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-cream-100 p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <button 
              onClick={onBack}
              className="flex items-center text-wine-800/60 hover:text-wine-800 transition-colors mb-4 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Landing
            </button>
            <h1 className="text-4xl font-serif text-wine-900">Procurement Dashboard</h1>
            <p className="text-wine-900/60 font-light">Comparing 6 suppliers across 142 active listings</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-wine-800/20 text-wine-800">
              <FileSpreadsheet className="w-4 h-4 mr-2" /> Export Report
            </Button>
            <Button className="bg-wine-800 hover:bg-wine-900 text-cream-50">
              Add Supplier List
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-white border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs uppercase tracking-wider">Total Listings</CardDescription>
              <CardTitle className="text-3xl font-serif text-wine-900">142</CardTitle>
            </CardHeader>
          </Card>
          <Card className="bg-white border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs uppercase tracking-wider">Market Savings</CardDescription>
              <CardTitle className="text-3xl font-serif text-wine-800">12.4%</CardTitle>
            </CardHeader>
          </Card>
          <Card className="bg-white border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs uppercase tracking-wider">Best Value Flags</CardDescription>
              <CardTitle className="text-3xl font-serif text-gold-600">18</CardTitle>
            </CardHeader>
          </Card>
          <Card className="bg-white border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardDescription className="text-xs uppercase tracking-wider">Suppliers Sync</CardDescription>
              <CardTitle className="text-3xl font-serif text-wine-900">6/6</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Main Content */}
        <Card className="bg-white border-none shadow-xl overflow-hidden">
          <div className="p-6 border-b border-cream-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-wine-900/30" />
              <Input 
                placeholder="Search by wine name or region..." 
                className="pl-10 border-cream-100 focus:ring-wine-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="bg-cream-100 p-1">
                  <TabsTrigger value="all" className="data-[state=active]:bg-white">All Wines</TabsTrigger>
                  <TabsTrigger value="best" className="data-[state=active]:bg-white">Best Value</TabsTrigger>
                  <TabsTrigger value="low-stock" className="data-[state=active]:bg-white">Low Stock</TabsTrigger>
                </TabsList>
              </Tabs>
              <Button variant="ghost" size="icon" className="text-wine-800">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-cream-50/50">
                  <TableRow>
                    <TableHead className="font-serif text-wine-900">Wine Details</TableHead>
                    <TableHead className="font-serif text-wine-900">Supplier</TableHead>
                    <TableHead className="font-serif text-wine-900 text-right">Supplier Price</TableHead>
                    <TableHead className="font-serif text-wine-900 text-right">Market Price</TableHead>
                    <TableHead className="font-serif text-wine-900 text-center">Score</TableHead>
                    <TableHead className="font-serif text-wine-900 text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredWines.map((wine) => (
                    <TableRow key={wine.id} className="hover:bg-cream-50/30 transition-colors">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-wine-800/5 flex items-center justify-center text-wine-800">
                            <WineIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="font-medium text-wine-900">{wine.name}</div>
                            <div className="text-xs text-wine-900/50">{wine.region} • {wine.vintage}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-wine-900/70">{wine.supplier}</TableCell>
                      <TableCell className="text-right font-medium text-wine-900">
                        ${wine.supplierPrice.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex flex-col items-end">
                          <span className="text-wine-900/50 text-xs line-through">${wine.marketPrice.toLocaleString()}</span>
                          <span className="text-xs font-semibold text-gold-600">
                            {Math.round(((wine.marketPrice - wine.supplierPrice) / wine.marketPrice) * 100)}% Below
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className="border-gold-500/30 text-gold-600 bg-gold-500/5">
                          {wine.score} pts
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        {wine.bestValue ? (
                          <Badge className="bg-wine-800 text-cream-50 hover:bg-wine-900">
                            <TrendingDown className="w-3 h-3 mr-1" /> Best Value
                          </Badge>
                        ) : (
                          <Badge variant="secondary" className="bg-cream-100 text-wine-900/60">
                            Fair Price
                          </Badge>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Market Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-wine-900 text-cream-50 border-none shadow-xl">
            <CardHeader>
              <CardTitle className="font-serif text-2xl">AI Market Insight</CardTitle>
              <CardDescription className="text-cream-50/60">Real-time analysis based on Wine-Searcher API</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="font-light leading-relaxed opacity-90">
                "Bordeaux 2015 futures are currently trading 15% lower through <span className="text-gold-500 font-medium">Elite Imports</span> compared to the global retail average. We recommend securing allocations for Château Margaux before the next price adjustment."
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-gold-500" />
                  <span className="text-xs uppercase tracking-tighter">Buy Signal: Strong</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-cream-50/40" />
                  <span className="text-xs uppercase tracking-tighter">Market Trend: Bullish</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white border-none shadow-xl">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-wine-900">Supplier Performance</CardTitle>
              <CardDescription>Average discount vs. Market Price</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Elite Imports', discount: 18 },
                  { name: 'Vino Direct', discount: 12 },
                  { name: 'Global Cellars', discount: 5 },
                ].map((s) => (
                  <div key={s.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-wine-900 font-medium">{s.name}</span>
                      <span className="text-gold-600">{s.discount}%</span>
                    </div>
                    <div className="w-full h-2 bg-cream-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${s.discount * 5}%` }}
                        className="h-full bg-gold-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
