import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '../types/navigation';

/** Workaround for useNavigation<T>() having broken 'never' params types */
const useAppNavigation = <T extends StackScreenProps<'Root'>>() => useNavigation() as T['navigation'];

export default useAppNavigation;
