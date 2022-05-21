import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DataContextProvider } from '../context/dataContext';
import CountryPage from '../pages/CountryPage';
import Home from '../pages/Home';

export const RoutesContent = () => (
    <BrowserRouter>
        <DataContextProvider>
            <Routes>
                <Route path='/covid19-react' element={<Home />} />
                <Route
                    path='/covid19-react/:country'
                    element={<CountryPage />}
                />
            </Routes>
        </DataContextProvider>
    </BrowserRouter>
);
