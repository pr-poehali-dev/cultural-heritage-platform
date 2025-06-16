import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-orange-500 flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Декоративные элементы */}
      <div className="absolute top-20 left-20 text-6xl opacity-30 animate-pulse">
        🏛️
      </div>
      <div className="absolute top-40 right-32 text-4xl opacity-40 animate-bounce">
        🎭
      </div>
      <div className="absolute bottom-32 left-16 text-5xl opacity-35">🎪</div>
      <div className="absolute bottom-20 right-20 text-6xl opacity-30">🏰</div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent animate-fade-in">
            Культурное Наследие России
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Откройте для себя богатство культур народов России через игру,
            обучение и общение
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all"
          >
            <Icon name="Play" className="mr-2" />
            Начать путешествие
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg font-semibold rounded-full"
          >
            <Icon name="BookOpen" className="mr-2" />
            Изучить культуры
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl font-bold">150+</div>
            <div className="text-sm opacity-80">Народов России</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl font-bold">50K+</div>
            <div className="text-sm opacity-80">Участников</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl font-bold">1000+</div>
            <div className="text-sm opacity-80">Уроков</div>
          </div>
          <div className="animate-fade-in">
            <div className="text-3xl font-bold">5000+</div>
            <div className="text-sm opacity-80">Артефактов</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
