import React from 'react'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Box} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    title: {
        paddingTop: 20,
    },
    body__list: {
        marginLeft: 10,
        fontWeight: 'bold',
    },
    body__text: {
        fontWeight: 'bold',
    },
    root: {
        paddingTop: 64,
    },
}));

const Reglament1 = () => {
    const classes = useStyles();
    return (
        <Container maxWidth='lg' className={classes.root}>
            <Typography variant='inherit' component='h1' align='center' className={classes.title}>
                Регламент №1
            </Typography>
            <Box m={3}>
                <Typography paragraph className={classes.body__list}>
                    Регламент використанню перерви для відпочинку і харчування співробітниками дирекції з технічної
                    підтримки та обслуговування абонентів в вечірній, нічний та вранішній час
                </Typography>
                <Typography component='p'>1. В зв’язку з тим, що в вечірній, нічний, та вранішній час на робочій зміні в
                    технічній
                    підтримці знаходиться обмежена кількість співробітників, дуже важливо щоб час робочої зміни
                    співробітників використовувався найбільш ефективно.</Typography>
                <Typography paragraph>2. Вечірнім, нічним, та вранішнім часом який зазначається в цьому регламенті
                    вважається:</Typography>
                <Typography className={classes.body__list}>а) вечірній час — проміжок часу від 21:00 до
                    22:00;</Typography>
                <Typography className={classes.body__list}>б) нічний час — проміжок часу від 22:00 до
                    06:00;</Typography>
                <Typography className={classes.body__list} paragraph>в) вранішній час — проміжок часу від 06:00 до
                    09:00;</Typography>
                <Typography component='p'>1. Під ефективним використанням часу робочої зміни, вважається, складання
                    робочого графіку співробітників з мінімальною кількістю часу на перерви для відпочинку і харчування,
                    у вказані проміжки часу.</Typography>
                <Typography paragraph>2. Співробітникам, які працюють в вечірній час, та робоча зміна яких триває до
                    22:00, встановлюється наступний графік:</Typography>
                <Typography className={classes.body__list}>а) в останню годину робочої зміни, в період від 21:00 до
                    22:00 забороняється використовувати перерви для відпочинку і харчування;</Typography>
                <Typography className={classes.body__list} paragraph>б) час робочої зміни закінчується о 22:00, після
                    чого
                    співробітник повинен вийти з облікового запису АРМ host, прибратися на робочому місці, залишити
                    приміщення технічної підтримки та офісну будівлю через центральний вихід.</Typography>
                <Typography paragraph>Співробітникам, які працюють в нічний час, та робоча зміна яких триває до 23:00,
                    встановлюється наступний графік:
                </Typography>
                <Typography className={classes.body__list}>а) в перед останню годину робочої зміни, в період від 21:00
                    до 22:00 дозволяється використовувати перерву для відпочинку і харчування на проміжок часу не більше
                    5 хвилин;</Typography>
                <Typography className={classes.body__list}>б) в останню годину робочої зміни, в період від 22:00 до
                    23:00 забороняється використовувати перерву для відпочинку і харчування;</Typography>
                <Typography className={classes.body__list} paragraph>в) час робочої зміни закінчується о 23:00, після
                    чого співробітник повинен вийти з облікового запису АРМ host, прибратися на робочому місці, залишити
                    приміщення технічної підтримки та офісну будівлю через центральний вихід.</Typography>
                <Typography paragraph>Співробітникам, які працюють в нічний час, та робоча зміна яких триває до 24:00,
                    встановлюється наступний графік:

                </Typography>
                <Typography className={classes.body__list}>а) в період часу робочої зміни 21:00 до 22:00 дозволяється
                    використовувати перерву для відпочинку і харчування на проміжок часу не більше 10
                    хвилин;</Typography>
                <Typography className={classes.body__list}>б) в перед останню годину робочої зміни, в період від 22:00
                    до 23:00 дозволяється використовувати перерву для відпочинку і харчування на проміжок часу не більше
                    5 хвилин;</Typography>
                <Typography className={classes.body__list}>в) в останню годину робочої зміни, в період від 23:00 до
                    24:00 забороняється використовувати перерву для відпочинку і харчування.</Typography>
                <Typography className={classes.body__list} paragraph>г) час робочої зміни закінчується о 24:00, після
                    чого співробітник повинен вийти з облікового запису АРМ host, прибратися на робочому місці, залишити
                    приміщення технічної підтримки та офісну будівлю через додатковий вихід.</Typography>


            </Box>

        </Container>
    )
};

export default (Reglament1)