import { useCallback, useEffect, useState } from 'react';
import { Dimensions, ScaledSize } from 'react-native';

const useIsLandscape = () => {
    const [isLandscape, setIsLandscape] = useState(false);

    const onDimensionsChange = useCallback((ev: { window: ScaledSize; screen: ScaledSize }) => {
        setIsLandscape(ev.window.width > ev.window.height);
    }, []);

    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', onDimensionsChange);
        return () => {
            subscription.remove();
        };
    }, []);

    return isLandscape;
};

export default useIsLandscape;
