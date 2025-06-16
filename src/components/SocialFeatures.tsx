import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const SocialFeatures = () => {
  const forumTopics = [
    {
      title: "Традиционные свадебные обряды татар",
      author: "Алина К.",
      replies: 23,
      views: 456,
      time: "2 часа назад",
      category: "Традиции",
      hot: true,
    },
    {
      title: "Где найти настоящую чувашскую вышивку?",
      author: "Петр М.",
      replies: 15,
      views: 234,
      time: "5 часов назад",
      category: "Ремесла",
      hot: false,
    },
    {
      title: "Изучаем марийский язык вместе",
      author: "Елена В.",
      replies: 67,
      views: 1230,
      time: "1 день назад",
      category: "Языки",
      hot: true,
    },
  ];

  const userStories = [
    {
      author: "Дмитрий С.",
      location: "Якутск",
      story: "Провел неделю с эвенскими оленеводами. Невероятный опыт!",
      likes: 89,
      comments: 12,
      image: "🦌",
    },
    {
      author: "Мария Л.",
      location: "Казань",
      story: "Научилась готовить эчпочмак от бабушки-татарки",
      likes: 156,
      comments: 28,
      image: "🥟",
    },
    {
      author: "Андрей К.",
      location: "Грозный",
      story: "Посетил фестиваль адыгской культуры. Танцы просто огонь!",
      likes: 203,
      comments: 34,
      image: "💃",
    },
  ];

  const experts = [
    {
      name: "Др. Ирина Петрова",
      speciality: "Этнограф",
      expertise: "Культуры Сибири",
      rating: 4.9,
      answers: 234,
    },
    {
      name: "Проф. Михаил Волков",
      speciality: "Лингвист",
      expertise: "Тюркские языки",
      rating: 4.8,
      answers: 189,
    },
    {
      name: "Анна Смирнова",
      speciality: "Культуролог",
      expertise: "Народные традиции",
      rating: 4.7,
      answers: 156,
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Сообщество культурных исследователей
          </h2>
          <p className="text-xl text-gray-600">
            Общайтесь, делитесь опытом и учитесь друг у друга
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Форум */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Icon name="MessageSquare" className="mr-2 text-blue-600" />
                  Горячие обсуждения
                </div>
                <Button size="sm" variant="outline">
                  Все темы
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {forumTopics.map((topic, index) => (
                <div
                  key={index}
                  className="border-b pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold hover:text-blue-600 cursor-pointer flex items-center">
                      {topic.title}
                      {topic.hot && (
                        <Badge className="ml-2 bg-red-500">🔥</Badge>
                      )}
                    </h3>
                    <Badge variant="secondary">{topic.category}</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span>от {topic.author}</span>
                      <span>{topic.time}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center">
                        <Icon name="MessageCircle" size={14} className="mr-1" />
                        {topic.replies}
                      </span>
                      <span className="flex items-center">
                        <Icon name="Eye" size={14} className="mr-1" />
                        {topic.views}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <Button className="w-full mt-4">
                <Icon name="Plus" className="mr-2" />
                Создать новую тему
              </Button>
            </CardContent>
          </Card>

          {/* Эксперты */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="GraduationCap" className="mr-2 text-purple-600" />
                Эксперты онлайн
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {experts.map((expert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 border rounded-lg hover:shadow-md transition-shadow"
                >
                  <Avatar>
                    <AvatarFallback>
                      {expert.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{expert.name}</h4>
                    <p className="text-xs text-gray-500">{expert.speciality}</p>
                    <p className="text-xs text-blue-600">{expert.expertise}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center">
                        <Icon
                          name="Star"
                          size={12}
                          className="text-yellow-500 fill-current"
                        />
                        <span className="text-xs ml-1">{expert.rating}</span>
                      </div>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">
                        {expert.answers} ответов
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <Button className="w-full" variant="outline">
                <Icon name="HelpCircle" className="mr-2" />
                Задать вопрос эксперту
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Истории пользователей */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Icon name="Users" className="mr-2 text-green-600" />
              Истории сообщества
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {userStories.map((story, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <Avatar>
                      <AvatarFallback>
                        {story.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{story.author}</h4>
                      <p className="text-sm text-gray-500">{story.location}</p>
                    </div>
                  </div>
                  <div className="text-center text-6xl mb-4">{story.image}</div>
                  <p className="text-gray-700 mb-4">{story.story}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <button className="flex items-center hover:text-red-500">
                      <Icon name="Heart" size={16} className="mr-1" />
                      {story.likes}
                    </button>
                    <button className="flex items-center hover:text-blue-500">
                      <Icon name="MessageCircle" size={16} className="mr-1" />
                      {story.comments}
                    </button>
                    <button className="flex items-center hover:text-green-500">
                      <Icon name="Share2" size={16} className="mr-1" />
                      Поделиться
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SocialFeatures;
