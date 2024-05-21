import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landingpage";
import SignUpPage from "./pages/signup";
import LoginPage from "./pages/login";
import ForgotpasswordPage from "./pages/forgotpassword";
import AdminPage from "./pages/admin";
import Resetpassword from "./pages/resetpassword";
import Myapplications from "./pages/myapplications";
import ApplicantHomePage from "./pages/applicanthome";
import { FormProvider } from "./context/DynamicFormContext";
import { ComponentTypeContextProvider } from "./context/DynamicHomeComponents";
import HelpPage from "./pages/help";
import ProtectedRoute from "./protectedroutes";
import Myapplicationslayout from "./pages/myapplicationslayout";
import Applicationpreview from "./pages/applicationpreview";
import InspectorHomePage from "./pages/inspectorhome";
import InspectedapplicationId from "./pages/inspectedapplicationId";
import InspectorHomeLayout from "./pages/inspectorhomelayout";
import { ApproveModalContextProvider } from "./context/ShowApprovedModalContext";
import { DeniedModalContextProvider } from "./context/ShowDeniedModal";
import { AddProofModalContextProvider } from "./context/AddProofContext";
import JointPage from "./pages/joint";
import OrganisationPage from "./pages/organization";
import IndividualPage from "./pages/individual";
import PaymentPage from "./pages/payment";
import { FileProvider } from "./context/FileContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotpasswordPage />,
  },
  {
    path: "/resetpassword",
    element: <Resetpassword />,
  },
  {
    path: "/applicanthome",
    element: (
      <ProtectedRoute roleProp="APPLICANT">
        <ApplicantHomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/individual",
    element: (
      <ProtectedRoute roleProp="APPLICANT">
        <IndividualPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/payment",
    element: (
      <ProtectedRoute roleProp="APPLICANT">
        <PaymentPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/joint",
    element: (
      <ProtectedRoute roleProp="APPLICANT">
        <JointPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/organization",
    element: (
      <ProtectedRoute roleProp="APPLICANT">
        <OrganisationPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/myapplications",
    element: (
      <ProtectedRoute roleProp="APPLICANT">
        <Myapplicationslayout />
      </ProtectedRoute>
    ),children: [
      {
        index: true,
        element: <Myapplications/>,
      },
      {
        path: ":applicationId",
        element: <Applicationpreview />,
      },
      
    ],
  },

  {
    path: "/help",
    element: (
      <ProtectedRoute roleProp="APPLICANT">
        <HelpPage />
      </ProtectedRoute>
    ),
  },
  
  {
    path: "/inspectorhome",
    element: (
      <ProtectedRoute roleProp="APPLICANT">
        <InspectorHomeLayout/>
      </ProtectedRoute>
    ),children: [
      {
        index: true,
        element: <InspectorHomePage />,
      },
      {
        path: ":inspectedapplicationId",
        element: <InspectedapplicationId />,
      },
      
    ],
  },
]);
function App() {
  return (
    <FormProvider>
      <ComponentTypeContextProvider>
        <ApproveModalContextProvider>
          <DeniedModalContextProvider>
            <AddProofModalContextProvider>
              <FileProvider>
          <RouterProvider router={router} />
          </FileProvider>
          </AddProofModalContextProvider>
          </DeniedModalContextProvider>
        </ApproveModalContextProvider>
      </ComponentTypeContextProvider>
    </FormProvider>
  );
}

export default App;
