import { useEffect, useState } from 'react';
import { Accelerometer } from 'expo-sensors';

const Accelero = () =>  {

        const [data, setData] = useState({
                x: 0,
                y: 0,
                z: 0,
        });

        const [subscription, setSubscription] = useState(null);

        const subscribe = () => {
                setSubscription(
                        Accelerometer.addListener(accelerometerData => {
                                // do the check here?
                                setData(accelerometerData);
                        }),
                );
                console.log("subscribed");
        };

        const unsubscribe = () => {
                subscription && subscription.remove();
                setSubscription(null);
                console.log("unsubscribed");
        };

        function round(n) {
                if (!n) {
                        return 0;
                }
                return Math.floor(n * 100) / 100;
        }
}

export default Accelero;
