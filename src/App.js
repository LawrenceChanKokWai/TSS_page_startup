import NavigationBar from "./components/NavigatioBar/NavigationBar";
import LmsPage from "./pages/LMS/LmsPage";
import QuizPage from "./pages/Quiz/QuizPage";
import ProgrammingPage from "./pages/Programming/ProgrammingPage";
import InterviewPage from "./pages/Interview/InterviewPage";
import EmploymentPage from "./pages/Employment/EmploymentPage";
import HomePage from "./pages/Home/HomePage";

const App = () => {
	return (
		<div>
			<NavigationBar />
			<HomePage />
			<LmsPage />
			<QuizPage />
			<ProgrammingPage />
			<InterviewPage />
			<EmploymentPage />
		</div>
	);
};

export default App;
