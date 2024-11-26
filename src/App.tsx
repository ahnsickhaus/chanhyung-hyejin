import './App.css';
import { getApplicationForm } from './api/getApplicationForm';
import Type1 from './components/Type1';
import { useQuery } from '@tanstack/react-query';
import { ApplicationForm } from './types/applicationForm';
import { Couple } from './types/couple';
import { getCouple } from './api/getCouple';
import { Parents } from './types/parents';
import { getParents } from './api/getParents';
import { Directions } from './types/directions';
import { getDirections } from './api/getDirections';
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css'

function App() {
  const path = "chanhyung-hyejin"

  const { data: applicationForm, isLoading: applicationFormIsLoading } = useQuery<ApplicationForm[] | null>({
    queryKey: ["applicationForm", { path: path }],
    queryFn: () => getApplicationForm(path),
  });

  const coupleId = applicationForm && applicationForm[0].couple_id;
  const parentsId = applicationForm && applicationForm[0].parents_id;
  const directionsId = applicationForm && applicationForm[0].directions_id;

  const { data: couple, isLoading: coupleIsLoading } = useQuery<Couple[] | null>({
    queryKey: ["couple", { id: coupleId }],
    queryFn: () => getCouple(coupleId as number),
    enabled: !!coupleId,
  });

  const { data: parents, isLoading: parentsIsLoading } = useQuery<Parents[] | null>({
    queryKey: ["parents", { id: parentsId }],
    queryFn: () => getParents(parentsId as number),
    enabled: !!parentsId,
  });

  const { data: directions, isLoading: directionsIsLoading } = useQuery<Directions[] | null>({
    queryKey: ["directions", { id: directionsId }],
    queryFn: () => getDirections(directionsId as number),
    enabled: !!directionsId,
  });

  return (
    <div>
      {
        (applicationFormIsLoading || coupleIsLoading || parentsIsLoading || directionsIsLoading) && (
          <div>Loading...</div>
        )
      }
      {
        (applicationForm && couple && parents && directions) && (
          applicationForm[0].type === 1 && (
            <Type1 
              applicationForm={applicationForm[0]} 
              couple={couple[0]}
              parents={parents[0]}
              directions={directions[0]}
            />
          )
          // applicationForm[0].type === 2 && (
          //   <Type2 applicationForm={applicationForm[0]} />
          // )
        )
      }
    </div>
  );
}

export default App;