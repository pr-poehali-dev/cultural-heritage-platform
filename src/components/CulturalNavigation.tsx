import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const CulturalNavigation = () => {
  const culturalGroups = [
    {
      name: "Славянские народы",
      icon: "🏛️",
      color: "bg-blue-500",
      count: "12 народов",
    },
    {
      name: "Тюркские народы",
      icon: "🕌",
      color: "bg-green-500",
      count: "25 народов",
    },
    {
      name: "Финно-угорские народы",
      icon: "🌲",
      color: "bg-emerald-500",
      count: "18 народов",
    },
    {
      name: "Кавказские народы",
      icon: "⛰️",
      color: "bg-orange-500",
      count: "35 народов",
    },
    {
      name: "Монгольские народы",
      icon: "🏔️",
      color: "bg-purple-500",
      count: "8 народов",
    },
    {
      name: "Северные народы",
      icon: "❄️",
      color: "bg-cyan-500",
      count: "20 народов",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Исследуйте культуры народов России
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите культурную группу и погрузитесь в удивительный мир
            традиций, языков и обычаев
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {culturalGroups.map((group, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-0 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className={`${group.color} p-6 text-white text-center`}>
                  <div className="text-4xl mb-3">{group.icon}</div>
                  <h3 className="font-semibold text-lg mb-1">{group.name}</h3>
                  <p className="text-sm opacity-90">{group.count}</p>
                </div>
                <div className="p-4 bg-gray-50">
                  <Button className="w-full" variant="outline">
                    <Icon name="ArrowRight" className="ml-2" />
                    Изучить
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full"
          >
            <Icon name="Map" className="mr-2" />
            Интерактивная карта России
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CulturalNavigation;
