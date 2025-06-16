import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const GameMechanics = () => {
  const achievements = [
    {
      name: "Знаток традиций",
      icon: "🏆",
      color: "bg-yellow-500",
      progress: 100,
    },
    { name: "Полиглот", icon: "🗣️", color: "bg-blue-500", progress: 75 },
    { name: "Исследователь", icon: "🔍", color: "bg-green-500", progress: 60 },
    { name: "Историк", icon: "📚", color: "bg-purple-500", progress: 40 },
    { name: "Коллекционер", icon: "💎", color: "bg-orange-500", progress: 25 },
    { name: "Мастер викторин", icon: "🎯", color: "bg-red-500", progress: 90 },
  ];

  const leaderboard = [
    { name: "Анна К.", points: 15420, level: 28, region: "Москва" },
    { name: "Дмитрий С.", points: 14890, level: 27, region: "Казань" },
    { name: "Елена В.", points: 13750, level: 25, region: "Новосибирск" },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Ваш прогресс в изучении культур
          </h2>
          <p className="text-xl text-gray-600">
            Зарабатывайте очки, открывайте достижения и соревнуйтесь с друзьями
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Профиль игрока */}
          <Card className="bg-gradient-to-br from-purple-600 to-blue-600 text-white border-0">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                👤
              </div>
              <CardTitle className="text-2xl">
                Культурный Исследователь
              </CardTitle>
              <p className="opacity-90">Уровень 15</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold">8,540</div>
                <div className="text-sm opacity-80">Очков опыта</div>
              </div>
              <Progress value={65} className="bg-white/20" />
              <div className="text-center text-sm opacity-80">
                1,460 до следующего уровня
              </div>
            </CardContent>
          </Card>

          {/* Статистика */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="BarChart3" className="mr-2 text-purple-600" />
                Статистика
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Изучено культур</span>
                <Badge variant="secondary">23 из 150</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Викторины пройдены</span>
                <Badge variant="secondary">145</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Дней подряд</span>
                <Badge className="bg-orange-500">12 🔥</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Собрано артефактов</span>
                <Badge variant="secondary">67</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Топ лидеров */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Trophy" className="mr-2 text-yellow-500" />
                Лидеры недели
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {leaderboard.map((user, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-2 rounded-lg bg-gray-50"
                >
                  <div className="flex items-center space-x-3">
                    <Badge
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        index === 0
                          ? "bg-yellow-500"
                          : index === 1
                            ? "bg-gray-400"
                            : "bg-orange-600"
                      }`}
                    >
                      {index + 1}
                    </Badge>
                    <div>
                      <div className="font-semibold text-sm">{user.name}</div>
                      <div className="text-xs text-gray-500">{user.region}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-purple-600">
                      {user.points.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">
                      Уровень {user.level}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Достижения */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Достижения</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center space-y-2">
                  <div
                    className={`w-16 h-16 ${achievement.color} rounded-full flex items-center justify-center text-2xl mx-auto relative`}
                  >
                    {achievement.icon}
                    {achievement.progress === 100 && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Icon name="Check" size={12} className="text-white" />
                      </div>
                    )}
                  </div>
                  <div className="text-sm font-medium">{achievement.name}</div>
                  <Progress value={achievement.progress} className="h-2" />
                  <div className="text-xs text-gray-500">
                    {achievement.progress}%
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

export default GameMechanics;
