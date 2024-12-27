import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { ConfigService as BaseConfigService } from '@nestjs/config';

import type { ConfigVariables } from '../config.variables';
@Injectable()
export class ConfigProvider {
  private _var: ConfigVariables;

  private logger = new Logger(ConfigProvider.name);
  constructor(private readonly envConfig: BaseConfigService) {
    // Log the start of configuration loading
    this.logger.log('Loading configuration variables from the environment...');

    // Load configuration variables from the environment
    this.initializeConfig();

    // Validate the loaded configuration
    this.validate();
  }

  private initializeConfig() {
    this._var = {
      MONGODB_URI: this.envConfig.get<string>('WZ_MONGODB_URL'),
      DB_NAME: this.envConfig.get<string>('WZ_DB_NAME'),
      MONGODB_PASSWORD: this.envConfig.get<string>('WZ_MONGODB_PASS'),
      MONGODB_USER: this.envConfig.get<string>('WZ_MONGODB_USER'),
    };
  }
  // Getter for accessing the configuration variables
  get props() {
    return this._var;
  }

  // Method to validate configuration variables
  private validate(): void {
    const requiredVars = [
      { key: 'WZ_MONGODB_URI', value: this._var.MONGODB_URI },
      { key: 'WZ_DB_NAME', value: this._var.DB_NAME },
      { key: 'WZ_MONGODB_PASSWORD', value: this._var.MONGODB_PASSWORD },
      { key: 'WZ_MONGODB_USER', value: this._var.MONGODB_USER },
    ];

    let validationFailed = false;

    this.logger.log('Validating configuration variables...');

    // Check each required variable
    requiredVars.forEach(({ key, value }) => {
      if (!value) {
        this.logger.error(`${key} is not defined.`);
        validationFailed = true;
      }
    });

    // Throw an error if validation fails
    if (validationFailed) {
      const errorMessage =
        'Configuration validation failed. Please check your environment variables.';
      this.logger.error(errorMessage);
      throw new HttpException(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    this.logger.log('Configuration variables validated successfully.');
  }

  public get = <T>(key: string): T | undefined | null => {
    return this.envConfig.get<T>(key);
  };
}
