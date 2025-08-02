import { Button, Group } from "@mantine/core"
import Plus from '../../../../assets/plus-button.svg';
import Minus from '../../../../assets/minus-button.svg';
import styles from './InputButton.module.scss'

interface InputButtonProps {
  value: number;
  onChange: (newValue: number) => void;
}

const InputButton: React.FC<InputButtonProps> = ({ value, onChange }) => {

    function PlusButton() {
        return <img src={Plus} alt="increase" />
    }

    function MinusButton() {
        return <img src={Minus} alt="decrease" />
    }

    const handleIncrease = () => onChange(value + 1);
    const handleDecrease = () => onChange(Math.max(1, value - 1));

    return (
            <Group gap={0}>
                <Button 
                    variant="filled"
                    radius="md" 
                    onClick={handleDecrease} 
                    color='#DEE2E6' 
                    disabled={value <= 1}
                    className={styles.button__decrease}
                    >    
                    <MinusButton />
                </Button>
                <Button.GroupSection 
                    variant="default" 
                    bg="var(--mantine-color-body)"
                    className={styles.button__output}
                    >
                    {value}
                </Button.GroupSection>
                <Button 
                    variant="filled" 
                    radius="md" 
                    onClick={handleIncrease} 
                    color='#DEE2E6'
                    className={styles.button__increase} 
                    >
                    <PlusButton  />
                </Button>
                </Group>
    )
}

export default InputButton;