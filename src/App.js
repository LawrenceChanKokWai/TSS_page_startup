import NavigationBar from "./components/NavigatioBar/NavigationBar";
import LmsPage from "./pages/LMS/LmsPage";
import QuizPage from "./pages/Quiz/QuizPage";
import ExamPage from "./pages/ProctoredExam/ProctoredExam";
import ProgrammingPage from "./pages/Programming/ProgrammingPage";
import InterviewPage from "./pages/Interview/InterviewPage";
import EmploymentPage from "./pages/Employment/EmploymentPage";
import HomePage from "./pages/Home/HomePage";
import SmartLearningSystem from "./pages/SmartLearningSystem/SmartLearningSystem";

const App = () => {
	return (
		<div>
			<NavigationBar />
			<HomePage />
			<LmsPage />
			<QuizPage />
			<ExamPage />
			<ProgrammingPage />
			<InterviewPage />
			<EmploymentPage />
			<SmartLearningSystem />
		</div>
	);
};

export default App;
