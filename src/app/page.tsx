import RestaurantsList from "@/components/RestaurantsList";

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">La Médina de Fès - Un Voyage Culinaire</h2>
          <p className="mb-4 text-gray-700">
            Plongez dans le plus grand labyrinthe médiéval au monde, où les parfums d épices
            se mêlent aux effluves de pain frais et de tajines mijotés. La médina de Fès,
            classée au patrimoine mondial de l UNESCO, abrite des trésors culinaires dans
            ses ruelles sinueuses vieilles de 1200 ans.
          </p>
        </div>
        <RestaurantsList />
      </div>
    </main>
  );
}
