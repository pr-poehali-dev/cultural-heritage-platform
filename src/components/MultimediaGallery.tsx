import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const MultimediaGallery = () => {
  const audioContent = [
    {
      title: "Якутские героические сказания",
      duration: "15:30",
      category: "Эпос",
      plays: "2.3K",
      preview: "🎵",
    },
    {
      title: "Традиционные песни коми",
      duration: "8:45",
      category: "Музыка",
      plays: "1.8K",
      preview: "🎶",
    },
    {
      title: "Звуки природы Алтая",
      duration: "12:20",
      category: "Природа",
      plays: "5.1K",
      preview: "🏔️",
    },
  ];

  const videoContent = [
    {
      title: "Обряд встречи весны у удмуртов",
      duration: "18:30",
      views: "15K",
      category: "Традиции",
      thumbnail: "🌸",
    },
    {
      title: "Мастер-класс: плетение лаптей",
      duration: "25:45",
      views: "8.7K",
      category: "Ремесла",
      thumbnail: "👟",
    },
    {
      title: "Танцы народов Кавказа",
      duration: "12:15",
      views: "23K",
      category: "Танцы",
      thumbnail: "💃",
    },
  ];

  const artifacts = [
    {
      name: "Шаманский бубен эвенков",
      era: "XVIII век",
      region: "Сибирь",
      model3d: true,
      icon: "🥁",
    },
    {
      name: "Традиционный костюм мордвы",
      era: "XIX век",
      region: "Поволжье",
      model3d: true,
      icon: "👘",
    },
    {
      name: "Деревянная посуда карелов",
      era: "XVII век",
      region: "Карелия",
      model3d: false,
      icon: "🥣",
    },
    {
      name: "Украшения хакасов",
      era: "XVI век",
      region: "Южная Сибирь",
      model3d: true,
      icon: "💍",
    },
  ];

  const virtualTours = [
    {
      name: "Музей культур народов Сибири",
      location: "Новосибирск",
      visitors: "45K",
      rating: 4.8,
      preview: "🏛️",
    },
    {
      name: 'Этнографический комплекс "Атамань"',
      location: "Краснодар",
      visitors: "78K",
      rating: 4.9,
      preview: "🏘️",
    },
    {
      name: 'Музей под открытым небом "Витославлицы"',
      location: "Великий Новгород",
      visitors: "32K",
      rating: 4.7,
      preview: "⛪",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Мультимедиа галерея
          </h2>
          <p className="text-xl text-gray-600">
            Погрузитесь в культуры через аудио, видео и интерактивные 3D-модели
          </p>
        </div>

        <Tabs defaultValue="audio" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="audio" className="flex items-center">
              <Icon name="Volume2" className="mr-2" />
              Аудио
            </TabsTrigger>
            <TabsTrigger value="video" className="flex items-center">
              <Icon name="Video" className="mr-2" />
              Видео
            </TabsTrigger>
            <TabsTrigger value="artifacts" className="flex items-center">
              <Icon name="Sparkles" className="mr-2" />
              3D Артефакты
            </TabsTrigger>
            <TabsTrigger value="tours" className="flex items-center">
              <Icon name="MapPin" className="mr-2" />
              Виртуальные туры
            </TabsTrigger>
          </TabsList>

          <TabsContent value="audio">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {audioContent.map((audio, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-3">
                        {audio.preview}
                      </div>
                      <h3 className="font-semibold text-lg mb-2">
                        {audio.title}
                      </h3>
                      <Badge variant="secondary">{audio.category}</Badge>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                      <span>{audio.duration}</span>
                      <span>{audio.plays} прослушиваний</span>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <Icon name="Play" className="mr-2" />
                      Воспроизвести
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="video">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videoContent.map((video, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-full h-40 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center text-5xl mb-3">
                        {video.thumbnail}
                      </div>
                      <h3 className="font-semibold text-lg mb-2">
                        {video.title}
                      </h3>
                      <Badge variant="secondary">{video.category}</Badge>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                      <span>{video.duration}</span>
                      <span>{video.views} просмотров</span>
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      <Icon name="Play" className="mr-2" />
                      Смотреть
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="artifacts">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {artifacts.map((artifact, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-6xl mb-4">{artifact.icon}</div>
                    <h3 className="font-semibold mb-2">{artifact.name}</h3>
                    <div className="space-y-1 text-sm text-gray-600 mb-4">
                      <div>{artifact.era}</div>
                      <div>{artifact.region}</div>
                      {artifact.model3d && (
                        <Badge className="bg-purple-600">3D модель</Badge>
                      )}
                    </div>
                    <Button size="sm" className="w-full">
                      <Icon name="Eye" className="mr-2" />
                      {artifact.model3d ? "Смотреть в 3D" : "Посмотреть"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tours">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {virtualTours.map((tour, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-3">
                        {tour.preview}
                      </div>
                      <h3 className="font-semibold text-lg mb-2">
                        {tour.name}
                      </h3>
                      <p className="text-gray-600">{tour.location}</p>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                      <span>{tour.visitors} посетителей</span>
                      <div className="flex items-center">
                        <Icon
                          name="Star"
                          size={14}
                          className="text-yellow-500 fill-current mr-1"
                        />
                        {tour.rating}
                      </div>
                    </div>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      <Icon name="Navigation" className="mr-2" />
                      Начать тур
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full"
          >
            <Icon name="Zap" className="mr-2" />
            Исследовать всю коллекцию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MultimediaGallery;
