export const TextVariant = (delay) => {
    return {
        hidden:{
            y: -50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                delay: delay,
                duration: 1.25,
                ease: 'easeInOut',
            }
        }
             
    }
}

export const fadeIn = (direction, type, delay, duration) => {
    return {
        hidden: {
            x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
            y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: 'easeInOut',
            }
        }
    }
}

export const opacity = (delay, duration) => {
    return {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                delay: delay,    // Delays the animation by the passed delay value
                duration: duration,  
                ease: 'easeInOut' 
              }
        }
    }
}