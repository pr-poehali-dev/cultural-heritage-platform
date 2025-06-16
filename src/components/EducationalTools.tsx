import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const EducationalTools = () => {
  const quizzes = [
    {
      title: "Традиции народов Поволжья",
      difficulty: "Легко",
      questions: 15,
      completed: 12,
      category: "Традиции",
      color: "bg-green-100 text-green-800",
    },
    {
      title: "Языки финно-угорской группы",
      difficulty: "Средне",
      questions: 20,
      completed: 8,
      category: "Языки",
      color: "bg-blue-100 text-blue-800",
    },
    {
      title: "Кулинарные традиции Кавказа",
      difficulty: "Сложно",
      questions: 25,
      completed: 0,
      category: "Кулинария",
      color: "bg-orange-100 text-orange-800",
    },
  ];

  const videoLessons = [
    {
      title: "История русского костюма",
      duration: "12:30",
      views: "15K",
      thumbnail: "👘",
      category: "История",
    },
    {
      title: "Якутские эпосы и сказания",
      duration: "18:45",
      views: "8K",
      thumbnail: "📚",
      category: "Литература",
    },
    {
      title: "Традиционные ремесла Урала",
      duration: "22:10",
      views: "12K",
      thumbnail: "🔨",
      category: "Ремесла",
    },
  ];

  const culturalTests = [
    { region: "Сибирь", peoples: 15, progress: 75, icon: "🏔️" },
    { region: "Дальний Восток", peoples: 12, progress: 45, icon: "🌊" },
    { region: "Северный Кавказ", peoples: 18, progress: 90, icon: "⛰️" },
    { region: "Поволжье", peoples: 8, progress: 60, icon: "🌾" },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Образовательные инструменты
          </h2>
          <p className="text-xl text-gray-600">
            Изучайте культуры через интерактивные викторины, видеоуроки и тесты
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Викторины */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Brain" className="mr-2 text-purple-600" />
                Интерактивные викторины
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {quizzes.map((quiz, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-lg">{quiz.title}</h3>
                    <Badge className={quiz.color}>{quiz.category}</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <span>Сложность: {quiz.difficulty}</span>
                    <span>{quiz.questions} вопросов</span>
                  </div>
                  <Progress
                    value={(quiz.completed / quiz.questions) * 100}
                    className="mb-3"
                  />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {quiz.completed}/{quiz.questions} завершено
                    </span>
                    <Button
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      {quiz.completed === 0 ? "Начать" : "Продолжить"}
                    </Button>
                  </div>
                </div>
              ))}
              <Button className="w-full mt-4" variant="outline">
                <Icon name="Plus" className="mr-2" />
                Все викторины
              </Button>
            </CardContent>
          </Card>

          {/* Видеоуроки */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Play" className="mr-2 text-red-600" />
                Видеоуроки
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {videoLessons.map((video, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-3 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="w-16 h-12 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg flex items-center justify-center text-2xl">
                    {video.thumbnail}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{video.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{video.duration}</span>
                      <span>{video.views} просмотров</span>
                      <Badge variant="secondary">{video.category}</Badge>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Icon name="Play" size={16} />
                  </Button>
                </div>
              ))}
              <Button className="w-full mt-4" variant="outline">
                <Icon name="Video" className="mr-2" />
                Все видеоуроки
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Тесты по регионам */}
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Культурные тесты по регионам
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {culturalTests.map((test, index) => (
                <div
                  key={index}
                  className="text-center space-y-4 p-4 border rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="text-5xl">{test.icon}</div>
                  <h3 className="font-semibold text-lg">{test.region}</h3>
                  <div className="text-sm text-gray-600">
                    {test.peoples} народов
                  </div>
                  <Progress value={test.progress} className="h-3" />
                  <div className="text-sm font-medium text-purple-600">
                    {test.progress}% изучено
                  </div>
                  <Button size="sm" className="w-full">
                    <Icon name="BookOpen" className="mr-2" size={16} />
                    Пройти тест
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationalTools;
