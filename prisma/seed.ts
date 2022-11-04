import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {

    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Carlos Silva',
    //         email: 'caosdp@gmail.com',
    //         avatarURL: 'https://lh3.googleusercontent.com/a/ALm5wu3HxUmBB52HMgpt8vfskTfGHvrIEaj7U_7LFeFfRwI=s96-c',
    //         googleId: '117920678378733725370',
    //     }
    // })

    // const pool = await prisma.pool.create({
    //     data: {
    //         title: 'Bolão Seeder',
    //         code: 'BOL123',
    //         ownerId: user.id,
    //     }
    // })

    // const participant = await prisma.participant.create({
    //     data: {
    //         poolId: pool.id,
    //         userId: user.id
    //     }
    // })
    /*
    
    */

    /*
    
    */
    await prisma.game.create({
        data: {
            date: '2022-11-20T16:00:00Z',
            firstTeamCountryCode: 'QAT',
            secondTeamCountryCode: 'ECU',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-21T13:00:00Z',
            firstTeamCountryCode: 'ENG',
            secondTeamCountryCode: 'IRN',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-21T16:00:00Z',
            firstTeamCountryCode: 'SEN',
            secondTeamCountryCode: 'NED',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-21T19:00:00Z',
            firstTeamCountryCode: 'USA',
            secondTeamCountryCode: 'WAL',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-22T10:00:00Z',
            firstTeamCountryCode: 'ARG',
            secondTeamCountryCode: 'KSA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-22T13:00:00Z',
            firstTeamCountryCode: 'DEN',
            secondTeamCountryCode: 'TUN',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-22T16:00:00Z',
            firstTeamCountryCode: 'MEX',
            secondTeamCountryCode: 'POL',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-22T19:00:00Z',
            firstTeamCountryCode: 'FRA',
            secondTeamCountryCode: 'AUS',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-23T10:00:00Z',
            firstTeamCountryCode: 'MAR',
            secondTeamCountryCode: 'CRO',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-23T13:00:00Z',
            firstTeamCountryCode: 'GER',
            secondTeamCountryCode: 'JPN',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-23T16:00:00Z',
            firstTeamCountryCode: 'ESP',
            secondTeamCountryCode: 'CRC',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-23T19:00:00Z',
            firstTeamCountryCode: 'BEL',
            secondTeamCountryCode: 'CAN',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-24T10:00:00Z',
            firstTeamCountryCode: 'SUI',
            secondTeamCountryCode: 'CMR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-24T13:00:00Z',
            firstTeamCountryCode: 'URU',
            secondTeamCountryCode: 'KOR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-24T16:00:00Z',
            firstTeamCountryCode: 'POR',
            secondTeamCountryCode: 'GHA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-24T19:00:00Z',
            firstTeamCountryCode: 'BRA',
            secondTeamCountryCode: 'SRB',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-25T10:00:00Z',
            firstTeamCountryCode: 'WAL',
            secondTeamCountryCode: 'IRN',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-25T13:00:00Z',
            firstTeamCountryCode: 'QAT',
            secondTeamCountryCode: 'SEN',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-25T16:00:00Z',
            firstTeamCountryCode: 'NED',
            secondTeamCountryCode: 'ECU',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-25T19:00:00Z',
            firstTeamCountryCode: 'ENG',
            secondTeamCountryCode: 'USA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-26T10:00:00Z',
            firstTeamCountryCode: 'TUN',
            secondTeamCountryCode: 'AUS',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-26T13:00:00Z',
            firstTeamCountryCode: 'POL',
            secondTeamCountryCode: 'KSA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-26T16:00:00Z',
            firstTeamCountryCode: 'FRA',
            secondTeamCountryCode: 'DEN',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-26T19:00:00Z',
            firstTeamCountryCode: 'ARG',
            secondTeamCountryCode: 'MEX',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-27T10:00:00Z',
            firstTeamCountryCode: 'JPN',
            secondTeamCountryCode: 'CRC',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-27T13:00:00Z',
            firstTeamCountryCode: 'BEL',
            secondTeamCountryCode: 'MAR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-27T16:00:00Z',
            firstTeamCountryCode: 'CRO',
            secondTeamCountryCode: 'CAN',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-27T19:00:00Z',
            firstTeamCountryCode: 'ESP',
            secondTeamCountryCode: 'GER',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-28T10:00:00Z',
            firstTeamCountryCode: 'CMR',
            secondTeamCountryCode: 'SRB',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-28T13:00:00Z',
            firstTeamCountryCode: 'KOR',
            secondTeamCountryCode: 'GHA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-28T16:00:00Z',
            firstTeamCountryCode: 'BRA',
            secondTeamCountryCode: 'SUI',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-28T19:00:00Z',
            firstTeamCountryCode: 'POR',
            secondTeamCountryCode: 'URU',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-29T15:00:00Z',
            firstTeamCountryCode: 'NED',
            secondTeamCountryCode: 'QAT',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-29T15:00:00Z',
            firstTeamCountryCode: 'ECU',
            secondTeamCountryCode: 'SEN',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-29T19:00:00Z',
            firstTeamCountryCode: 'IRN',
            secondTeamCountryCode: 'USA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-29T19:00:00Z',
            firstTeamCountryCode: 'WAL',
            secondTeamCountryCode: 'ENG',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-30T15:00:00Z',
            firstTeamCountryCode: 'TUN',
            secondTeamCountryCode: 'FRA',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-30T15:00:00Z',
            firstTeamCountryCode: 'AUS',
            secondTeamCountryCode: 'DEN',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-30T19:00:00Z',
            firstTeamCountryCode: 'POL',
            secondTeamCountryCode: 'ARG',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-11-30T19:00:00Z',
            firstTeamCountryCode: 'KSA',
            secondTeamCountryCode: 'MEX',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-01T15:00:00Z',
            firstTeamCountryCode: 'CRO',
            secondTeamCountryCode: 'BEL',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-01T15:00:00Z',
            firstTeamCountryCode: 'CAN',
            secondTeamCountryCode: 'MAR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-01T19:00:00Z',
            firstTeamCountryCode: 'CRC',
            secondTeamCountryCode: 'GER',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-01T19:00:00Z',
            firstTeamCountryCode: 'JPN',
            secondTeamCountryCode: 'ESP',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-02T15:00:00Z',
            firstTeamCountryCode: 'KOR',
            secondTeamCountryCode: 'POR',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-02T15:00:00Z',
            firstTeamCountryCode: 'GHA',
            secondTeamCountryCode: 'URU',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-02T19:00:00Z',
            firstTeamCountryCode: 'SRB',
            secondTeamCountryCode: 'SUI',
        }
    })
    await prisma.game.create({
        data: {
            date: '2022-12-02T19:00:00Z',
            firstTeamCountryCode: 'CMR',
            secondTeamCountryCode: 'BRA',
        }
    })
    // await prisma.game.create({
    //     data: {
    //         date: '2022-11-04T12:00:00.201Z',
    //         firstTeamCountryCode: 'AR',
    //         secondTeamCountryCode: 'BR',
    //         // guesses:{
    //         //     create: {
    //         //         firstTeamPoint:2,
    //         //         secondTeamPoint:3,
    //         //         participant: {
    //         //             connect:{
    //         //                 userId_poolId:{
    //         //                     userId: user.id,
    //         //                     poolId: pool.id,
    //         //                 }
    //         //             }
    //         //         }
    //         //     }
    //         // }
    //     }
    // })

}
main()